from fastapi import FastAPI

from pydantic import BaseModel
from database import SessionLocal

from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from models import User

# Create Database Tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

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

# Founder
@app.get("/prashant")
def prashant():
    return {
        "name": "Prashant Roy",
        "role": "Founder"
    }

# Chat API
@app.get("/chat")
def chat():
    return {
        "reply": "Hello Prashant! AI Chatbot Ready 🚀"
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