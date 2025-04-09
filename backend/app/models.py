from app import db
from datetime import datetime

class Meme(db.Model):
    __tablename__ = 'memes'

    id = db.Column(db.Integer, primary_key=True)  # SERIAL PRIMARY KEY
    file_name = db.Column(db.String, nullable=False)  # TEXT NOT NULL
    display_name = db.Column(db.String, nullable=False)  # TEXT NOT NULL
    user_id = db.Column(db.Integer, nullable=True)  # INTEGER (optional)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)  # TIMESTAMP DEFAULT NOW()

    def to_dict(self, include_user_id=False):
        data = {
            "id": self.id,
            "file_name": self.file_name,
            "display_name": self.display_name,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
        if include_user_id:
            data["user_id"] = self.user_id
        return data


class Template(db.Model):
    __tablename__ = 'templates'

    id = db.Column(db.Integer, primary_key=True)  # SERIAL PRIMARY KEY
    file_name = db.Column(db.String, nullable=False)  # TEXT NOT NULL
    display_name = db.Column(db.String, nullable=False)  # TEXT NOT NULL
    user_id = db.Column(db.Integer, nullable=True)  # INTEGER (optional)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)  # TIMESTAMP DEFAULT NOW()

    def to_dict(self, include_user_id=False):
        data = {
            "id": self.id,
            "file_name": self.file_name,
            "display_name": self.display_name,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
        if include_user_id:
            data["user_id"] = self.user_id
        return data