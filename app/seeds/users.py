from app.models import db, environment, SCHEMA, User

def seed_users():
    objects = [
        User(
            first_name = 'Demo',
            last_name = 'User',
            email = 'demo@user.com',
            password = '123456',
            prime = True
        ),
    ]
    db.session.add_all(objects)
    db.session.commit()


def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()