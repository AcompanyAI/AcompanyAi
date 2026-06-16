from fastapi import FastAPI

chat_memory = []

from pydantic import BaseModel
from database import SessionLocal

from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from models import User

import os
import google.generativeai as genai
from dotenv import load_dotenv
from groq import Groq
# Create Database Tables
Base.metadata.create_all(bind=engine)

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class ChatRequest(BaseModel):
    message: str

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home
@app.get("/")
def home():
    return {
        "message": "Hello Prashant AI"
    }

# AI Status
@app.get("/ai")
def ai():
    return {
        "status": "AI Backend Connected",
        "version": "1.0"
    }

@app.post("/chat")
def chat(data: ChatRequest):

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": """
You are AcompanyAI.

Reply in the same language as the user.

Hindi -> Hindi
English -> English
Hinglish -> Hinglish

Use markdown formatting.
Use headings and spacing.

Markdown Rules:

Always leave one blank line after headings.

Correct:

## Title

Paragraph text

### Section

Paragraph text

Incorrect:

## Title Paragraph text

### Section Paragraph text

Always format markdown correctly.

Hindi Style Rules:

- Use simple Hindi.
- Avoid difficult Sanskrit words.
- Explain like a teacher talking to a student.
- Prefer common words over formal words.
- Make answers conversational and easy to understand.
"""
            },
            {
                "role": "user",
                "content": data.message
            }
        ]
    )

    ai_reply = response.choices[0].message.content

    print("\n===== AI REPLY =====")
    print(ai_reply)
    print("====================\n")

    return {
        "reply": ai_reply
    }

@app.post("/signup")
def signup(user: UserCreate):

    db = SessionLocal()

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        return {
            "success": False,
            "message": "Email already exists"
        }

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "success": True,
        "message": "Account created successfully"
    }