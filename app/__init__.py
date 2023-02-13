import os
from flask import Flask
from flask_migrate import Migrate
from flask_login import LoginManager
from .models import db, User
from .routes import api
from .seeds import seed_commands
from .config import Configuration


app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')



login_manager = LoginManager(app)

@login_manager.user_loader
def load_account(id):
    return User.query.get(int(id))

app.config.from_object(Configuration)

app.cli.add_command(seed_commands)
app.register_blueprint(api, url_prefix='/api')


db.init_app(app)
Migrate(app, db)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')