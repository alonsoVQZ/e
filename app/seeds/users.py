from app.models import db, environment, SCHEMA, User
from sqlalchemy.sql import text

def seed_users():
    objects = [
        User(
            first_name = 'Demo',
            last_name = 'User',
            email = 'demo@user.com',
            password = '123456',
        ),
    ]
    db.session.add_all(objects)
    db.session.commit()


def undo_users():
    if environment == "production":
        db.session.execute(text(f"TRUNCATE table {SCHEMA}.Users RESTART IDENTITY CASCADE;"))
    else:
        db.session.execute("DELETE FROM Users")

    db.session.commit()

    