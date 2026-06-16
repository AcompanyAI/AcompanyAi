import os
import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("HEYGEN_API_KEY")

response = requests.get(
    "https://api.heygen.com/v1/voice.list",
    headers={
        "X-Api-Key": api_key
    }
)

print(response.status_code)
print(response.text)