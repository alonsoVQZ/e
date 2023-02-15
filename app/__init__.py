import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect, generate_csrf
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


CORS(app)

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)

@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')