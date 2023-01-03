from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Order(db.Model):
    __tablename__ = 'Orders'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    
    id = db.Column(db.Integer, primary_key=True)
    personal_account_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Personal_Accounts.id')), nullable=False)
    status = db.Column(db.Boolean(), default=False, nullable=True)
    total = db.Column(db.Float, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    personal_account = db.relationship('Personal_Account', back_populates='orders')


    products_order = db.relationship('Product_Order', back_populates='order', cascade="all, delete-orphan")



    def data(self):
        return {
            self.id,
            self.personal_account_id,
            self.status,
            self.total,
        }