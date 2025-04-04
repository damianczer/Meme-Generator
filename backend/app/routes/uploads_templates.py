from flask import Blueprint, send_from_directory, current_app

uploads_templates = Blueprint('uploads_templates', __name__)

@uploads_templates.route('/uploads/templates/<filename>', methods=['GET'])
def get_template_file(filename):
    return send_from_directory(current_app.config['TEMPLATES_FOLDER'], filename)