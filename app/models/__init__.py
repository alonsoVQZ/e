import os
from flask_sqlalchemy import SQLAlchemy


environment = os.environ.get("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

db = SQLAlchemy()


def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr


from .accounts import Account
from .personal_accounts import Personal_Account
from .business_accounts import Business_Account
from .products import Product
from .orders import Order
from .produts_orders import Product_Order
