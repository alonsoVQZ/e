from .models import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func


class Account(db.Model, UserMixin):
    __tablename__ = 'Accounts'

    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    hashed_password = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    personal_account = db.relationship('Personal_Account', back_populates='account', cascade="all, delete-orphan", uselist=False)
    business_accounts = db.relationship('Business_Account', back_populates='account', cascade="all, delete-orphan")



    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)

    def data(self):
        return {
            self.id,
            self.email,
            self.personal_account,
            self.business_accounts
        }