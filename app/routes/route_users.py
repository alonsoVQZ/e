from flask import Blueprint

route_users = Blueprint('users', __name__)

@route_users.route('/sign_in', methods=['GET'])
def sign_in():
    return "raw"