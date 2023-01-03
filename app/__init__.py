import os
from flask import Flask
from flask_migrate import Migrate
from flask_login import LoginManager
from .models import db
from .routes import api
from .config import Configuration
from .models import Account


app = Flask(__name__)



login_manager = LoginManager(app)

@login_manager.user_loader
def load_account(id):
    return Account.query.get(int(id))

app.config.from_object(Configuration)


app.register_blueprint(api, url_prefix='/api')


db.init_app(app)
Migrate(app, db)