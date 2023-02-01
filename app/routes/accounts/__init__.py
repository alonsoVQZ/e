from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, Account, Personal_Account, Business_Account
from .personal import personal

accounts = Blueprint('accounts', __name__)

accounts.register_blueprint(personal, url_prefix='/personal')


# /api/accounts/email
@accounts.route('/email', methods=['GET', 'POST'])
def accounts_email():
    data = request.json
    account = Account.query.filter((Account.email == data["email"])).first()
    if account:
        return account.data()
    else:
        return {
            "code": 401,
            "error": "We cannot find an account with that email address"
        }

# SIGN IN ACCOUNT
@accounts.route('/sign-in', methods=['GET', 'POST'])
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