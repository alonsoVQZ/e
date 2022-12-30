from flask import Flask
from Flask_Login import LoginManager
from .routes import api

app = Flask(__name__)
login_manager = LoginManager(app)

app.register_blueprint(api, url_prefix='/api')