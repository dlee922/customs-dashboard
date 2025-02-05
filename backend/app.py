from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.auth_routes import auth
from routes.dashboard_routes import dashboard_bp
from models.models import bcrypt, db
from config import JWT_SECRET_KEY
from datetime import timedelta

app = Flask(__name__)

# JWT Configuration
app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=15)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=7)

CORS(app)  # Enable CORS for frontend communication
JWTManager(app)  # Initialize JWT

# Check database connection
if db is None:
    print("Error: MongoDB is not connected. Exiting application.")
    exit(1)


# Register Blueprints
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(dashboard_bp)

if __name__ == '__main__':
    app.run(debug=True)
