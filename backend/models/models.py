from pymongo import MongoClient
from flask_bcrypt import Bcrypt
from config import MONGO_URI
# Create bcrypt instance for hashing passwords
bcrypt = Bcrypt()

try:
  # Connect to MongoDB
  client = MongoClient(MONGO_URI)  # Replace with your URI
  db = client["customs_dashboard"]  # Replace with your database name

  # Access collections
  users_collection = db["users"]
  stats_collection = db["user_stats"]
except Exception as e:
  print("Error connecting to MongoDB: {e}")
  db = None
  user_collection = None 
  stats_collection = None
