from app.routes.api_memes import api_memes
from app.routes.api_templates import api_templates
from app.routes.uploads_memes import uploads_memes
from app.routes.uploads_templates import uploads_templates

def register_routes(app):
    app.register_blueprint(api_memes)
    app.register_blueprint(api_templates)
    app.register_blueprint(uploads_memes)
    app.register_blueprint(uploads_templates)