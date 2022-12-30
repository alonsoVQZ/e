from .models import db
from sqlalchemy.sql import func


class Product(db.Model):
    __tablename__ = 'Products'

    
    id = db.Column(db.Integer, primary_key=True)
    business_account_id = db.Column(db.Integer, db.ForeignKey('Business_Account.id'), nullable=False)
    product_name = db.Column(db.String(50), nullable=False)
    product_price = db.Column(db.String(50), nullable=False)
    product_discount = db.Column(db.String(50), nullable=True)
    product_description = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    business_account = db.relationship('Business_Account', back_populates='products', cascade="all, delete-orphan")


    def data(self):
        return {
            self.id,
            self.business_account_id,
            self.product_name,
            self.product_price,
            self.product_discount,
            self.product_description,
        }