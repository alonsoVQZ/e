from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Media(db.Model):
    __tablename__ = 'Medias'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)

    url = db.Column(db.String, nullable = False)
    mediaable_id = db.Column(db.Integer, nullable=False)
    mediaable_type = db.Column(db.Enum('product', 'review', name="mediaable_types"), nullable=False)
    
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    def data(self):
        return {
            self.id,
            self.url,
            self.mediaable_id,
            self.mediaable_type,
        }