from flask import Blueprint, jsonify, request, current_app
from app.models import Template
from app import db
import os
import uuid
from app.utils import allowed_file

api_templates = Blueprint('api_templates', __name__)

@api_templates.route('/api/templates', methods=['GET'])
def get_templates():
    templates = Template.query.all()
    if not templates:
        return jsonify(message="No templates found."), 404
    return jsonify([template.to_dict() for template in templates])

@api_templates.route('/api/templates', methods=['POST'])
def upload_template():
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
    filepath = os.path.join(current_app.config['TEMPLATES_FOLDER'], unique_filename)
    file.save(filepath)

    template = Template(file_name=unique_filename, display_name=display_name, user_id=user_id)
    db.session.add(template)
    db.session.commit()

    return jsonify(
        message="Template uploaded successfully",
        file_name=unique_filename,
        display_name=display_name,
        user_id=user_id
    ), 201

@api_templates.route('/api/templates', methods=['DELETE'])
def delete_template():
    file_name = request.args.get('file_name')
    if not file_name:
        return jsonify(message="Missing required parameter: file_name"), 400

    template = Template.query.filter_by(file_name=file_name).first()
    if not template:
        return jsonify(message="Template not found."), 404

    filepath = os.path.join(current_app.config['TEMPLATES_FOLDER'], template.file_name)
    if os.path.exists(filepath):
        os.remove(filepath)

    db.session.delete(template)
    db.session.commit()

    return jsonify(message="Template deleted successfully"), 200