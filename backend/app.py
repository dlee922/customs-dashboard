from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.auth_routes import auth
from models import bcrypt

app = Flask(__name__)

# Configuration
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Replace with your own secret key
CORS(app)  # Enable CORS for frontend communication
JWTManager(app)  # Initialize JWT

# Register Blueprints
app.register_blueprint(auth, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
