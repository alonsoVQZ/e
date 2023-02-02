import os
from flask import Flask
from flask_migrate import Migrate
from flask_login import LoginManager
from .models import db, User
from .routes import api
from .seeds import seed_commands
from .config import Configuration


app = Flask(__name__)



login_manager = LoginManager(app)

@login_manager.user_loader
def load_account(id):
    return User.query.get(int(id))

app.config.from_object(Configuration)

app.cli.add_command(seed_commands)
app.register_blueprint(api, url_prefix='/api')


db.init_app(app)
Migrate(app, db)