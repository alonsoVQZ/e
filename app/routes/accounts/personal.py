from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, Account, Personal_Account, Business_Account

personal = Blueprint('personal', __name__)

@personal.route('/email', methods=['POST'])
def personal_email():
    data = request.json
    account = Account.query.filter((Account.email == data["email"])).first()
    if account:
        accountSerialized = account.account_personal_email()
        if accountSerialized["personal_account"]:
            return accountSerialized
    return {
            "code": 401,
            "error": "We cannot find an account with that email address"
        }


@personal.route('/signin', methods=['POST'])
def personal_sign_in():
    data = request.json
    account = Account.query.get(data["id"])
    if account.check_password(data["password"]):
        login_user(account)
        accountSerialized = account.account_personal_data()
        return accountSerialized
    return {
            "code": 401,
            "error": "Your password is incorrect"
        }
        


@personal.route('/sign-up', methods=['POST'])
def personal_sign_up():
    data = request.json
    account = Account.query.filter((Account.email == data["email"])).first()
    if account:
        login_user(account)
        new_personal_account = Personal_Account(**{
            "account_id": int(current_user.id),
            "first_name": data["first_name"],
            "last_name": data["last_name"],
        })
        db.session.add(new_personal_account)
        db.session.commit()
        return new_personal_account.data()
    else:
        new_account = Account(**{ "email": data["email"], "password": data["password"] })
        db.session.add(new_account)
        db.session.commit()
        login_user(new_account)
        new_personal_account = Personal_Account(**{
            "account_id": int(current_user.id),
            "first_name": data["first_name"],
            "last_name": data["last_name"],
        })
        db.session.add(new_personal_account)
        db.session.commit()
        return new_personal_account.data()


@personal.route('/signout')
@login_required
def personal_signout():
    logout_user()
    return {
        "message": "Logged out successfully"
    }


@personal.route('/session')
@login_required
def personal_session():
    return current_user.account_personal_data()