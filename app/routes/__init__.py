from flask import Blueprint
from .user import user
from .products import products


api = Blueprint('api', __name__)


api.register_blueprint(user, url_prefix='/user')
api.register_blueprint(products, url_prefix='/products')
