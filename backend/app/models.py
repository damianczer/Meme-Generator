from app import db
from datetime import datetime


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)  # SERIAL PRIMARY KEY
    file_name = db.Column(db.String, nullable=False)  # TEXT NOT NULL
    display_name = db.Column(db.String, nullable=False)  # TEXT NOT NULL
    user_id = db.Column(db.Integer, nullable=True)  # INTEGER (optional)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)  # TIMESTAMP DEFAULT NOW()

    def to_dict(self):
        return {
            "id": self.id,
            "file_name": self.file_name,
            "display_name": self.display_name,
            "user_id": self.user_id,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }