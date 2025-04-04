from flask import Blueprint, send_from_directory, current_app

uploads_memes = Blueprint('uploads_memes', __name__)

@uploads_memes.route('/uploads/memes/<filename>', methods=['GET'])
def get_meme_file(filename):
    return send_from_directory(current_app.config['MEMES_FOLDER'], filename)