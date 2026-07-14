# Eleviq Technologies — Project Status & Session Notes

## Current State (as of July 11, 2026)

### Live URLs
- **Website:** https://kigechaedward.github.io/eleviq-website/#/
- **Backend (pending):** Deploy to Render — needs env vars filled in

### Tech Stack
- **Frontend:** React 18 + Vite + Tailwind CSS (port 5173)
- **Backend:** Python FastAPI + CrewAI + LangChain-Groq (port 8000)
- **AI Model:** llama3-70b-8192 via Groq (free)
- **Deploy:** GitHub Pages (frontend), Render (backend — not yet live)

---

## Completed Work

### 1. WhatsApp API Integration (Backend)
- Fixed webhook verification: Meta sends query params, not headers (`api/chat_endpoints.py:62-72`)
- Added `X-Hub-Signature-256` HMAC signature validation (`api/chat_endpoints.py:79-87`)
- POST handler always returns 200 to avoid Meta retries (`api/chat_endpoints.py:108-112`)
- Created unified `api/server.py` — combines both FastAPI apps into one process
- Created `api/Dockerfile` and `render.yaml` for Render deployment
- Created `api/.env.production` template with all required variables
- Updated `api/requirements.txt` with `uvicorn[standard]`

### 2. WhatsApp Button (Frontend)
- Added `WhatsAppButton` component to `App.jsx:64` — green WhatsApp chat button on every page
- Uses `wa.me/254790683823` direct link (not API-based yet)

### 3. i18n Bug Fixes
- **Problem:** Services page used `t('s0_t')`, `t('s0_d')` etc. — keys that didn't exist in translations
- **Root cause:** `t()` returns the raw key when translation is missing
- **Fix:** Pages now read directly from data arrays (`SERVICES`, `PROJECTS`) instead of missing i18n keys
- Added missing translations: `ready_to_evolve`, `your_digital_dna`, `cta_desc`, `initiate_project`, `send_transmission`, `faq_title`, `q0`, `a0`, `q1`, `a1`, `bot_faq_q2/q3`, `bot_faq_a2/a3`

---

## Pending — WhatsApp Production Setup

### Meta Developer Console
- **App ID:** 1710895716725210
- **Business Account ID:** 102722555941289
- **App Name:** eleviq AI chatbot
- **Temporary Token Generated:** `1710895716725210|jZ0qHZodZYTMQfhldcrI3UNxoXs`

### Still Needed from Meta Console
1. **Phone Number ID** — from WhatsApp > API Setup page
2. **App Secret** — from Settings > Basic
3. **Permanent System User Token** — from Business Settings > System Users (temporary expires in 24h)

### Render Deployment Steps
1. Push to GitHub (done)
2. Go to render.com > New > Web Service
3. Connect repo, set Root Directory to `api`
4. Instance Type: **Free**
5. Fill in env vars (GROQ_API_KEY, WHATSAPP_API_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_VERIFY_TOKEN, WHATSAPP_APP_SECRET, FRONTEND_URL)
6. Get the public URL
7. In Meta > WhatsApp > Configuration > Webhooks:
   - Callback URL: `https://eleviq-api.onrender.com/whatsapp/webhook`
   - Verify Token: `eleviq_verify_2024`
8. Subscribe to **messages**

---

## Key Files Reference

| File | Purpose |
|---|---|
| `src/App.jsx` | Root component — routes, ChatWidget, SupportHub, WhatsAppButton |
| `src/utils/i18n.js` | Translation system (en, sw, zh, fr, es, ja, ko, hi) |
| `src/data/services.js` | 9 services data array |
| `src/data/projects.js` | 6 projects data array |
| `src/components/ChatWidget.jsx` | Website AI chat widget (connects to port 8001) |
| `src/components/SupportHub.jsx` | FAQ bot with WhatsApp fallback |
| `src/components/WhatsAppButton.jsx` | Green WhatsApp link button |
| `src/components/Team.jsx` | Team members (Edward, Jane, Samuel) |
| `api/server.py` | Unified FastAPI entry point (port 8000) |
| `api/chat_endpoints.py` | Chat + WhatsApp webhook routes |
| `api/chat_agent.py` | Conversational AI agent (LangChain + Groq) |
| `api/main.py` | CrewAI agent orchestration |
| `.github/workflows/deploy-gh-pages.yml` | Auto-deploy to GitHub Pages on push to main |

---

## Environment Variables

### Local (api/.env)
```
GROQ_API_KEY=your_groq_api_key_here
```

### Production (api/.env.production — template)
```
GROQ_API_KEY=your_groq_api_key_here
WHATSAPP_API_TOKEN=your_whatsapp_business_api_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_VERIFY_TOKEN=eleviq_verify_2024
WHATSAPP_APP_SECRET=your_app_secret_from_meta
FRONTEND_URL=https://kigechaedward.github.io/eleviq-website/
```

---

## Known Issues / Future Work
- ChatWidget connects to localhost:8001 — needs deployed backend URL in production
- Sessions are in-memory — lost on server restart
- WhatsAppButton not yet connected to WhatsApp API (currently just wa.me link)
- No Docker/production deployment config for local development
- `gh` CLI not installed on this machine
