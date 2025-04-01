import os
from flask import Blueprint, jsonify, request, send_from_directory, current_app
from werkzeug.utils import secure_filename
from app import db
from app.models import Image
import uuid

main = Blueprint('main', __name__)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']

@main.route('/uploads/<filename>', methods=['GET'])
def get_uploaded_file(filename):
    return send_from_directory(current_app.config['UPLOAD_FOLDER'], filename)

@main.route('/')
def home():
    return jsonify(message="Welcome to the Flask backend!")

@main.route('/api')
def api():
    return jsonify(message="This is the API endpoint.")

@main.route('/api/memes', methods=['GET'])
def get_memes():
    images = Image.query.all()
    if not images:
        return jsonify(message="No memes found."), 404
    return jsonify([image.to_dict() for image in images])

@main.route('/api/memes', methods=['POST'])
def upload_meme():
    if 'file' not in request.files:
        return jsonify(message="No file part in the request"), 400

    file = request.files['file']
    display_name = request.form.get('display_name')
    user_id = request.form.get('user_id')

    if not display_name:
        return jsonify(message="Missing required field: display_name"), 400
    if not user_id:
        return jsonify(message="Missing required field: user_id"), 400

    if file.filename == '':
        return jsonify(message="No selected file"), 400

    max_content_length = current_app.config['MAX_CONTENT_LENGTH']
    file.seek(0, os.SEEK_END)
    file_size = file.tell()
    file.seek(0)
    if file_size > max_content_length:
        return jsonify(message=f"File size exceeds the maximum limit of {max_content_length} bytes"), 400

    original_filename = file.filename
    if not allowed_file(original_filename):
        return jsonify(message="File type not allowed"), 400

    if file.content_type not in current_app.config['ALLOWED_MIME_TYPES']:
        return jsonify(message="MIME type not allowed"), 400

    file_ext = original_filename.rsplit('.', 1)[1].lower()
    if file_ext not in current_app.config['ALLOWED_EXTENSIONS']:
        return jsonify(message="File extension is not allowed"), 400

    unique_filename = f"{uuid.uuid4().hex}.{file_ext}"
    filepath = os.path.join(current_app.config['UPLOAD_FOLDER'], unique_filename)
    file.save(filepath)

    image = Image(file_name=unique_filename, display_name=display_name, user_id=user_id)
    db.session.add(image)
    db.session.commit()

    return jsonify(
        message="Meme uploaded successfully",
        file_name=unique_filename,
        display_name=display_name,
        user_id=user_id
    ), 201
