import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
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

@app.get("/")
async def root():
    return {"status": "Eleviq AI Agents Online"}

@app.post("/kickoff-agent-team")
async def kickoff_team(request: AgentRequest):
    if not os.getenv("GROQ_API_KEY"):
        raise HTTPException(status_code=500, detail="GROQ_API_KEY not found in environment")

    try:
        # 1. Define Agents
        analyst = Agent(
            role='Market Strategist',
            goal=f'Analyze the {request.client_industry} market for digital gaps.',
            backstory='You are a senior analyst at Eleviq. You find ROI opportunities in tech.',
            llm=llm,
            verbose=True
        )

        architect = Agent(
            role='Solutions Architect',
            goal=f'Design a technical solution to achieve: {request.project_goal}',
            backstory='You convert business goals into scalable software architecture.',
            llm=llm,
            verbose=True
        )

        # 2. Define Tasks
        task1 = Task(
            description=f'Identify 3 key technical trends in {request.client_industry}.',
            expected_output='A bulleted list of 3 trends with business impact.',
            agent=analyst
        )

        task2 = Task(
            description=f'Based on the trends, propose a high-level technical architecture for {request.project_goal}.',
            expected_output='A professional technical summary for the Eleviq portfolio.',
            agent=architect,
            context=[task1]
        )

        # 3. Create and Run Crew
        crew = Crew(
            agents=[analyst, architect],
            tasks=[task1, task2],
            process=Process.sequential,
            verbose=True
        )

        result = crew.kickoff()

        return {
            "success": True,
            "agent_output": str(result)
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
