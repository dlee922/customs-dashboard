from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

dashboard_bp = Blueprint('dashboard', __name__)

@dashboard_bp.route('/dashboard', methods=['GET'])
@jwt_required()  # Requires a valid access token
def dashboard():
    current_user = get_jwt_identity()  # Get user identity from the token
    return jsonify({
        "msg": f"Welcome to your dashboard, user {current_user}!"
    }), 200