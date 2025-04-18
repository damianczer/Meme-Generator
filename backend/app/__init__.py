import os
from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.extensions import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    os.makedirs(app.config['MEMES_FOLDER'], exist_ok=True)
    os.makedirs(app.config['TEMPLATES_FOLDER'], exist_ok=True)

    db.init_app(app)
    CORS(app)

    from app.routes import register_routes
    register_routes(app)

    return app