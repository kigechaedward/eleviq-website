import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
from langchain_groq import ChatGroq

# Load environment variables (API Keys)
load_dotenv()

app = FastAPI(title="Eleviq AI Agent Backend")

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Brain Setup (Groq is free and ultra-fast)
# Required environment variable: GROQ_API_KEY
llm = ChatGroq(
    temperature=0.7,
    model_name="llama3-70b-8192",
    groq_api_key=os.getenv("GROQ_API_KEY")
)

# Request Data Model
class AgentRequest(BaseModel):
    client_industry: str
    project_goal: str
    agents: Optional[List[str]] = ["analyst", "architect"]

# Agent Definitions
AGENT_CONFIGS = {
    "analyst": {
        "role": "Market Strategist",
        "goal_template": "Analyze the {industry} market for digital gaps and identify ROI opportunities.",
        "backstory": "You are a senior market analyst at Eleviq Technologies. You specialize in finding high-value digital transformation opportunities across industries. You think in terms of business impact and competitive advantage."
    },
    "architect": {
        "role": "Solutions Architect",
        "goal_template": "Design a scalable technical solution to achieve: {goal}",
        "backstory": "You are a principal solutions architect at Eleviq. You transform business requirements into robust, scalable software architectures. You consider scalability, security, cost-effectiveness, and maintainability in every design."
    },
    "developer": {
        "role": "Lead Developer",
        "goal_template": "Review the technical feasibility and recommend the optimal tech stack for: {goal}",
        "backstory": "You are a senior full-stack developer with 10+ years of experience. You evaluate technology choices based on team size, timeline, budget, and long-term maintainability. You're pragmatic and ship-focused."
    },
    "qa": {
        "role": "QA Engineer",
        "goal_template": "Identify quality risks and design a comprehensive testing strategy for: {goal}",
        "backstory": "You are a quality assurance lead who ensures software reliability. You think about edge cases, performance bottlenecks, security vulnerabilities, and user experience issues before they become production problems."
    },
    "devops": {
        "role": "DevOps Engineer",
        "goal_template": "Plan the deployment pipeline and infrastructure for: {goal}",
        "backstory": "You are a DevOps specialist who designs CI/CD pipelines, cloud infrastructure, and monitoring systems. You focus on reliability, cost optimization, and deployment speed."
    }
}

@app.get("/")
async def root():
    return {"status": "Eleviq AI Agents Online", "agents": list(AGENT_CONFIGS.keys())}

@app.post("/kickoff-agent-team")
async def kickoff_team(request: AgentRequest):
    if not os.getenv("GROQ_API_KEY"):
        raise HTTPException(status_code=500, detail="GROQ_API_KEY not found in environment")

    # Validate requested agents
    invalid_agents = [a for a in request.agents if a not in AGENT_CONFIGS]
    if invalid_agents:
        raise HTTPException(status_code=400, detail=f"Invalid agents: {invalid_agents}. Available: {list(AGENT_CONFIGS.keys())}")

    try:
        # Create agents based on request
        agents = []
        tasks = []
        
        for agent_id in request.agents:
            config = AGENT_CONFIGS[agent_id]
            
            # Create agent with industry/goal context
            agent = Agent(
                role=config["role"],
                goal=config["goal_template"].format(
                    industry=request.client_industry,
                    goal=request.project_goal
                ),
                backstory=config["backstory"],
                llm=llm,
                verbose=True
            )
            agents.append(agent)
            
            # Create task for this agent
            task = Task(
                description=f"As the {config['role']}, analyze and provide recommendations for a {request.client_industry} project: {request.project_goal}",
                expected_output=f"A detailed analysis from the {config['role']} perspective with actionable recommendations.",
                agent=agent
            )
            tasks.append(task)

        # Create and Run Crew
        crew = Crew(
            agents=agents,
            tasks=tasks,
            process=Process.sequential,
            verbose=True
        )

        result = crew.kickoff()

        return {
            "success": True,
            "agent_output": str(result),
            "agents_used": request.agents
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/agents")
async def list_agents():
    """List all available agent types"""
    return {
        "agents": [
            {
                "id": agent_id,
                "name": config["role"],
                "description": config["backstory"][:100] + "..."
            }
            for agent_id, config in AGENT_CONFIGS.items()
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)