import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Eleviq API")

FRONTEND_URL = os.getenv("FRONTEND_URL", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "*"] if FRONTEND_URL != "*" else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the chat + WhatsApp webhook app
from chat_endpoints import app as chat_app
app.mount("/", chat_app)

# Mount the AI agent app on /agents prefix
from main import app as agents_app
app.mount("/agents", agents_app)

@app.get("/health")
async def health():
    return {"status": "ok", "service": "eleviq-api"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))
