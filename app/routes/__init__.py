from flask import Blueprint
from .route_products import products
from .accounts import accounts


api = Blueprint('api', __name__)


api.register_blueprint(accounts, url_prefix='/accounts')
api.register_blueprint(products, url_prefix='/products')
