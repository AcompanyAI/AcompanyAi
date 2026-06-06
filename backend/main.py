from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello Prashant AI"}
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello Prashant AI"}

@app.get("/ai")
def ai():
    return {"status": "AI Backend Connected"}
@app.get("/prashant")
def prashant():
    return {"name": "Prashant Roy", "role": "Founder"}
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello Prashant AI"}

@app.get("/prashant")
def prashant():
    return {
        "name": "Prashant Roy",
        "role": "Founder"
    }

@app.get("/ai")
def ai():
    return {
        "status": "AI Backend Connected",
        "version": "1.0"
    }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Hello Prashant AI"}

@app.get("/ai")
def ai():
    return {"status": "AI Backend Connected"}
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/chat")
def chat():
    return {
        "reply": "Hello Prashant! AI Chatbot Ready 🚀"
    }