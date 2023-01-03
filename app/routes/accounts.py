from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, Account, Personal_Account, Business_Account
from .personal_account import personal
from .business_account import business

accounts = Blueprint('account', __name__)


accounts.register_blueprint(personal, url_prefix='/personal')
accounts.register_blueprint(business, url_prefix='/business')


# SIGN IN ACCOUNT
@accounts.route('/sign-in', methods=['POST'])
def accounts_sign_in():
    data = request.json
    account = Account.query.filter((Account.email == data["email"])).first()
    if account:
        if not account.check_password(data["password"]):
            return {
                "code": 401,
                "error": "Invalid password."
            }
        login_user(account)
        return account.data()
    else:
        return {
            "code": 401,
            "error": "Invalid email."
        }


# SIGN OUT ACCOUNT
@accounts.route('/sign-out')
@login_required
def accounts_sign_out():
    logout_user()
    return {
        "message": "Logged out successfully."
    }

# GET CURRENT USER DATA
@accounts.route('/session')
@login_required
def accounts_session():
    return current_user.data()