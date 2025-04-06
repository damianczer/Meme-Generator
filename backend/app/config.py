import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MEMES_FOLDER = os.path.join(BASE_DIR, os.getenv('MEMES_FOLDER').replace('/', os.sep))
    TEMPLATES_FOLDER = os.path.join(BASE_DIR, os.getenv('TEMPLATES_FOLDER').replace('/', os.sep))
    ALLOWED_EXTENSIONS = set(os.getenv('ALLOWED_EXTENSIONS').split(','))
    ALLOWED_MIME_TYPES = set(os.getenv('ALLOWED_MIME_TYPES').split(','))
    MAX_CONTENT_LENGTH = int(os.getenv('MAX_CONTENT_LENGTH'))