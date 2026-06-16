import os
import requests
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("HEYGEN_API_KEY")

response = requests.get(
    "https://api.heygen.com/v2/avatars",
    headers={
        "X-Api-Key": api_key
    }
)

print("Status Code:", response.status_code)
print(response.text)