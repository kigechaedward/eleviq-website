import os
import hashlib
import hmac
from fastapi import FastAPI, HTTPException, Request, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv
from chat_agent import chat_agent

load_dotenv()

app = FastAPI(title="Eleviq Chat API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class ChatRequest(BaseModel):
    session_id: str
    message: str
    user_name: Optional[str] = None
    user_email: Optional[str] = None

class WhatsAppMessage(BaseModel):
    object: str
    entry: list

# Website Chat Endpoint
@app.post("/chat")
async def chat(request: ChatRequest):
    if not os.getenv("GROQ_API_KEY"):
        raise HTTPException(status_code=500, detail="GROQ_API_KEY not configured")

    try:
        # Store user info if provided
        session = chat_agent.get_session(request.session_id)
        if request.user_name:
            session.user_info["name"] = request.user_name
        if request.user_email:
            session.user_info["email"] = request.user_email

        response = chat_agent.chat(request.session_id, request.message)
        return {
            "success": True,
            "response": response,
            "session_id": request.session_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/chat/session/{session_id}")
async def get_session(session_id: str):
    info = chat_agent.get_session_info(session_id)
    if not info:
        raise HTTPException(status_code=404, detail="Session not found")
    return info

# WhatsApp Webhook Verification (Meta requires this)
@app.get("/whatsapp/webhook")
async def verify_whatsapp_webhook(
    hub_mode: str = Header(None),
    hub_verify_token: str = Header(None),
    hub_challenge: str = Header(None)
):
    verify_token = os.getenv("WHATSAPP_VERIFY_TOKEN")
    
    if hub_mode == "subscribe" and hub_verify_token == verify_token:
        return int(hub_challenge)
    raise HTTPException(status_code=403, detail="Verification failed")

# WhatsApp Message Handler
@app.post("/whatsapp/webhook")
async def handle_whatsapp_message(message: WhatsAppMessage):
    if not os.getenv("GROQ_API_KEY"):
        raise HTTPException(status_code=500, detail="GROQ_API_KEY not configured")

    try:
        # Extract message data from Meta's format
        for entry in message.entry:
            for change in entry.get("changes", []):
                value = change.get("value", {})
                messages = value.get("messages", [])
                
                for msg in messages:
                    phone = msg.get("from")
                    text = msg.get("text", {}).get("body", "")
                    
                    if text:
                        # Use phone number as session ID for WhatsApp
                        session_id = f"whatsapp_{phone}"
                        response = chat_agent.chat(session_id, text)
                        
                        # Here you would send the response back via WhatsApp API
                        # This requires the WhatsApp Business API token
                        await send_whatsapp_message(phone, response)

        return {"status": "ok"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def send_whatsapp_message(phone: str, message: str):
    """Send message via WhatsApp Business API"""
    import httpx
    
    token = os.getenv("WHATSAPP_API_TOKEN")
    phone_number_id = os.getenv("WHATSAPP_PHONE_NUMBER_ID")
    
    if not token or not phone_number_id:
        print(f"WhatsApp API not configured. Would send to {phone}: {message}")
        return

    url = f"https://graph.facebook.com/v18.0/{phone_number_id}/messages"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": phone,
        "type": "text",
        "text": {"body": message}
    }

    async with httpx.AsyncClient() as client:
        await client.post(url, json=payload, headers=headers)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)