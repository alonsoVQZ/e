from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Business_Account(db.Model):
    __tablename__ = 'Business_Accounts'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Accounts.id')), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    
    account = db.relationship('Account', back_populates='business_accounts')


    products = db.relationship('Product', back_populates='business_account', cascade="all, delete-orphan")


    def data(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "name": self.name,
        }