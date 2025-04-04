import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MEMES_FOLDER = os.getenv('MEMES_FOLDER')
    TEMPLATES_FOLDER = os.getenv('TEMPLATES_FOLDER')
    ALLOWED_EXTENSIONS = set(os.getenv('ALLOWED_EXTENSIONS').split(','))
    ALLOWED_MIME_TYPES = set(os.getenv('ALLOWED_MIME_TYPES').split(','))
    MAX_CONTENT_LENGTH = int(os.getenv('MAX_CONTENT_LENGTH'))