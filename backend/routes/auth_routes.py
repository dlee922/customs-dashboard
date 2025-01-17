from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models.models import users_collection, bcrypt

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if username already exists
    if users_collection.find_one({'username': username}):
        return jsonify({"msg": "Username already exists"}), 400

    # Hash the password and save the user
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    users_collection.insert_one({'username': username, 'password': hashed_password})

    return jsonify({"msg": "User registered successfully"}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Find the user
    user = users_collection.find_one({'username': username})
    if not user or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({"msg": "Invalid username or password"}), 401

    # Generate a JWT
    access_token = create_access_token(identity=str(user['_id']))
    return jsonify(access_token=access_token), 200
    