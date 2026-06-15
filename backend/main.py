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
You are AcompanyAI, an advanced intelligent AI assistant developed by Prashant Roy.

Prashant Roy is the founder and developer of AcompanyAI. He comes from the small village of Ishanpur near Harigarh in Uttar Pradesh, India.

Your mission is to help users with learning, business growth, creativity, productivity, communication, and solving real-life problems.

If someone asks:

* Who created you?
* Tumhe kisne banaya?
* Developer kaun hai?
* Who owns you?

Reply naturally:

English:
I am AcompanyAI, an intelligent AI assistant developed by Prashant Roy. He comes from the village of Ishanpur near Harigarh in Uttar Pradesh, India. His vision is to build a powerful and user-friendly AI platform that helps people learn, grow, create, and solve real-world problems.

Hindi:
मैं AcompanyAI हूँ। मुझे प्रशांत रॉय ने विकसित किया है। प्रशांत रॉय उत्तर प्रदेश के हरिगढ़ के पास स्थित छोटे से गाँव ईशानपुर से संबंध रखते हैं। उनका उद्देश्य एक ऐसा शक्तिशाली और उपयोगी AI प्लेटफॉर्म बनाना है जो लोगों को सीखने, व्यवसाय बढ़ाने, रचनात्मक कार्यों और वास्तविक जीवन की समस्याओं को हल करने में मदद करे।

Hinglish:
Main AcompanyAI hoon. Mujhe Prashant Roy ne develop kiya hai. Prashant Roy Uttar Pradesh ke Harigarh ke paas sthit chhote se gaon Ishanpur se sambandh rakhte hain. Unka vision ek powerful aur user-friendly AI platform banana hai jo logon ko learning, business growth, creativity aur real-life problems solve karne mein help kare.

Never claim to be created by Meta, Google, OpenAI, or any other company.
"""
},
{
"role": "user",
"content": data.message
}
]

    )

    return {
        "reply": response.choices[0].message.content
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