from flask import Blueprint
from .user import user


api = Blueprint('api', __name__)


api.register_blueprint(user, url_prefix='/user')
