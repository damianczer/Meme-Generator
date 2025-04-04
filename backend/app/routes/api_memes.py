from flask import Blueprint, jsonify, request, current_app
from app.models import Meme
from app import db
import os
import uuid
from app.utils import allowed_file

api_memes = Blueprint('api_memes', __name__)

@api_memes.route('/api/memes', methods=['GET'])
def get_memes():
    memes = Meme.query.all()
    if not memes:
        return jsonify(message="No memes found."), 404
    return jsonify([meme.to_dict() for meme in memes])

@api_memes.route('/api/memes', methods=['POST'])
def upload_meme():
    if 'file' not in request.files:
        return jsonify(message="No file part in the request"), 400

    file = request.files['file']
    display_name = request.form.get('display_name')
    user_id = request.form.get('user_id')

    if not display_name:
        return jsonify(message="Missing required field: display_name"), 400
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

    file_ext = original_filename.rsplit('.', 1)[1].lower()
    unique_filename = f"{uuid.uuid4().hex}.{file_ext}"
    filepath = os.path.join(current_app.config['MEMES_FOLDER'], unique_filename)
    file.save(filepath)

    meme = Meme(file_name=unique_filename, display_name=display_name, user_id=user_id)
    db.session.add(meme)
    db.session.commit()

    return jsonify(
        message="Meme uploaded successfully",
        file_name=unique_filename,
        display_name=display_name,
        user_id=user_id
    ), 201