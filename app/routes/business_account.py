from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, Account, Personal_Account, Business_Account

business = Blueprint('business', __name__)


@business.route('/sign-up', methods=['POST'])
def business_sign_up():
    data = request.json
    account = Account.query.filter((Account.email == data["email"])).first()
    if account:
        login_user(account)
        new_business_account = Business_Account(**{
            "account_id": int(current_user.id),
            "name": data["name"],
        })
        db.session.add(new_business_account)
        db.session.commit()
        return new_business_account.data()
    else:
        new_account = Account(**{ "email": data["email"], "password": data["password"] })
        db.session.add(new_account)
        db.session.commit()
        login_user(new_account)
        new_business_account = Business_Account(**{
            "account_id": int(current_user.id),
            "name": data["name"],
        })
        db.session.add(new_business_account)
        db.session.commit()
        return new_business_account.data()

