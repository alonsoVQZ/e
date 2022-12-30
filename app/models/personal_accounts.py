from .models import db
from sqlalchemy.sql import func


class Personal_Account(db.Model):
    __tablename__ = 'Personal_Accounts'

    
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('Accounts.id'), nullable=False, unique=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    account = db.relationship('Account', back_populates='personal_account', cascade="all, delete-orphan")


    def data(self):
        return {
            self.id,
            self.account_id,
            self.first_name,
            self.last_name,
            self.account,
        }