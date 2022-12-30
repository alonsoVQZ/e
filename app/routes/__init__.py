from flask import Blueprint
from .route_products import products


api = Blueprint('api', __name__)


api.register_blueprint(products, url_prefix='products')
