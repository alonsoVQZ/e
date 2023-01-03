from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Personal_Account(db.Model):
    __tablename__ = 'Personal_Accounts'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Accounts.id')), nullable=False, unique=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    account = db.relationship('Account', back_populates='personal_account')


    orders = db.relationship('Order', back_populates='personal_account', cascade="all, delete-orphan")


    def data(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
        }