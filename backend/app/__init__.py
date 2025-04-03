from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['IMAGES_FOLDER'] = os.path.join(
    os.path.dirname(__file__), '..', os.getenv('IMAGES_FOLDER')
)
app.config['TEMPLATES_FOLDER'] = os.path.join(
    os.path.dirname(__file__), '..', os.getenv('TEMPLATES_FOLDER')
)
app.config['ALLOWED_EXTENSIONS'] = set(os.getenv('ALLOWED_EXTENSIONS').split(','))
app.config['ALLOWED_MIME_TYPES'] = set(os.getenv('ALLOWED_MIME_TYPES').split(','))
app.config['MAX_CONTENT_LENGTH'] = int(os.getenv('MAX_CONTENT_LENGTH'))

db = SQLAlchemy(app)

if not os.path.exists(app.config['IMAGES_FOLDER']):
    os.makedirs(app.config['IMAGES_FOLDER'])

if not os.path.exists(app.config['TEMPLATES_FOLDER']):
    os.makedirs(app.config['TEMPLATES_FOLDER'])

from app.routes import main
app.register_blueprint(main)