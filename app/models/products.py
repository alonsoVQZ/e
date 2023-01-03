from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Product(db.Model):
    __tablename__ = 'Products'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)
    business_account_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Business_Accounts.id')), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    business_account = db.relationship('Business_Account', back_populates='products')


    product_orders = db.relationship('Product_Order', back_populates='product', cascade="all, delete-orphan")


    def data(self):
        return {
            self.id,
            self.business_account_id,
            self.name,
            self.price,
            self.discount,
            self.description,
        }