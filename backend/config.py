from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env

MONGO_URI = os.getenv("MONGO_URI")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")