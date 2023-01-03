from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Product_Order(db.Model):
    __tablename__ = 'Products_Orders'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Orders.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Products.id')), nullable=False)
    quantity = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    order = db.relationship('Order', back_populates='products_order')


    product = db.relationship('Product', back_populates='product_orders')


    def data(self):
        return {
            self.id,
            self.order_id,
            self.product_id,
            self.quantity,
        }