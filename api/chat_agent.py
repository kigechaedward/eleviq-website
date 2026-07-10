import os
from typing import Optional, Dict, List
from datetime import datetime
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage

# Eleviq Technologies Knowledge Base
KNOWLEDGE_BASE = """
You are Eleviq Assistant, the friendly AI representative of Eleviq Technologies.

## About Eleviq Technologies
- Software engineering and consulting firm based in Nairobi, Kenya
- Founded to transform organizations through digital intelligence
- Specializes in: Custom Software, AI/Automation, Cloud Solutions, Web/Mobile Products, IT Advisory

## Services We Offer
1. **Custom Software Development** - Tailored solutions for unique business needs
2. **AI & Automation** - Intelligent systems, chatbots, process automation
3. **Cloud Architecture** - AWS, Azure, GCP infrastructure and migration
4. **Web Development** - Modern, responsive web applications
5. **Mobile Development** - iOS and Android native/cross-platform apps
6. **IT Advisory** - Strategic technology consulting
7. **Data Analytics** - Business intelligence and data-driven insights
8. **Cybersecurity** - Protection and compliance solutions
9. **E-commerce Solutions** - Online store development and optimization

## Our Process
1. Discovery call to understand your needs
2. Technical analysis and proposal
3. Agile development with regular updates
4. Testing and quality assurance
5. Deployment and ongoing support

## Why Choose Eleviq
- African-owned, globally competitive
- Technical excellence without jargon
- Speed and credibility
- Proven track record with startups and enterprises
- Nairobi-based with global reach

## Contact Information
- Email: info@eleviqtechnologies.net
- Phone: +254 790 683 823
- Location: Nairobi, Kenya
- Website: https://kigechaedward.github.io/eleviq-website/

## Conversation Guidelines
- Be friendly, professional, and helpful
- Keep responses concise (2-4 sentences max unless detail requested)
- Always offer to connect them with the team for complex queries
- Don't make up information - if unsure, say you'll connect them with the team
- Use emojis sparingly to keep it professional
- If they seem ready to buy, encourage booking a discovery call
"""

class ChatSession:
    def __init__(self, session_id: str):
        self.session_id = session_id
        self.messages: List[Dict] = []
        self.created_at = datetime.now()
        self.last_active = datetime.now()
        self.user_info: Dict = {}

    def add_message(self, role: str, content: str):
        self.messages.append({"role": role, "content": content})
        self.last_active = datetime.now()

    def get_history(self) -> List:
        history = []
        for msg in self.messages:
            if msg["role"] == "user":
                history.append(HumanMessage(content=msg["content"]))
            elif msg["role"] == "assistant":
                history.append(AIMessage(content=msg["content"]))
        return history

class ConversationalAgent:
    def __init__(self):
        self.llm = ChatGroq(
            temperature=0.7,
            model_name="llama3-70b-8192",
            groq_api_key=os.getenv("GROQ_API_KEY")
        )
        self.sessions: Dict[str, ChatSession] = {}

    def get_session(self, session_id: str) -> ChatSession:
        if session_id not in self.sessions:
            self.sessions[session_id] = ChatSession(session_id)
        return self.sessions[session_id]

    def chat(self, session_id: str, message: str) -> str:
        session = self.get_session(session_id)
        session.add_message("user", message)

        # Build messages for LLM
        messages = [SystemMessage(content=KNOWLEDGE_BASE)]
        messages.extend(session.get_history())
        messages.append(HumanMessage(content=message))

        # Get response
        response = self.llm.invoke(messages)
        assistant_message = response.content

        session.add_message("assistant", assistant_message)
        return assistant_message

    def get_session_info(self, session_id: str) -> Optional[Dict]:
        session = self.sessions.get(session_id)
        if not session:
            return None
        return {
            "session_id": session.session_id,
            "message_count": len(session.messages),
            "created_at": session.created_at.isoformat(),
            "last_active": session.last_active.isoformat()
        }

# Global agent instance
chat_agent = ConversationalAgent()