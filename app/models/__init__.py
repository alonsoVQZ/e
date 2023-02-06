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


from .users import User
from .sellers import Seller
from .products import Product
from .departments import Department
from .medias import Media
