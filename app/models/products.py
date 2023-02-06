from . import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Product(db.Model):
    __tablename__ = 'Products'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    

    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Sellers.id')), nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Departments.id')), nullable=False)

    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(100), nullable=False)
    stock = db.Column(db.Integer, nullable=False)


    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    medias = db.relationship('Media', primaryjoin="and_(Media.mediaable_type=='product', foreign(Media.mediaable_id)==Product.id)",lazy="dynamic",)


    def data(self):
        return {
            self.id,
            self.seller_id,
            self.name,
            self.price,
            self.discount,
            self.description,
            self.stock,
        }