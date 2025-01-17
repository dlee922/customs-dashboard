from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.auth_routes import auth
from models.models import bcrypt, db
from config import JWT_SECRET_KEY

app = Flask(__name__)

# Configuration
app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY
CORS(app)  # Enable CORS for frontend communication
JWTManager(app)  # Initialize JWT

# Check database connection
if db is None:
    print("Error: MongoDB is not connected. Exiting application.")
    exit(1)


# Register Blueprints
app.register_blueprint(auth, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
