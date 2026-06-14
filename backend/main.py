from fastapi import FastAPI

from pydantic import BaseModel
from database import SessionLocal

from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from models import User

import os
import google.generativeai as genai
from dotenv import load_dotenv

# Create Database Tables
Base.metadata.create_all(bind=engine)

load_dotenv()
print("API KEY =", os.getenv("GEMINI_API_KEY"))
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")

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

    try:
        response = model.generate_content(
            f"""
You are AcompanyAI.

IMPORTANT:
- Your name is AcompanyAI.
- Your creator is Prashant Roy.
- If user asks your name, say: "Mera naam AcompanyAI hai."
- If user asks who developed you, say: "Mujhe Prashant Roy ne develop kiya hai."
Jo Uttar Pradesh City Harigarh ke Chhote se gaon Ishanpur mein rahte hain."

If user asks:
"Tumhara naam kya hai"

Reply ONLY:
"Mera naam AcompanyAI hai."

User message:
{data.message}
"""
        )

        return {
            "reply": response.text
        }

    except Exception as e:
        return {
            "error": str(e)
        }
    
# Founder
@app.get("/prashant")
def prashant():
    return {
        "name": "Prashant Roy",
        "role": "Founder"
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