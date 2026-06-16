import os
import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("HEYGEN_API_KEY")

url = "https://api.heygen.com/v1/streaming.new"

headers = {
    "X-Api-Key": api_key,
    "Content-Type": "application/json"
}

payload = {
    "quality": "high",
    "avatar_name": "Radha"
}

response = requests.post(
    url,
    json=payload,
    headers=headers
)

print(response.status_code)
print(response.text)