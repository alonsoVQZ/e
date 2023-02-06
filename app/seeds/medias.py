from app.models import db, environment, SCHEMA, Media

def seed_medias():
    objects = [
        Media(
            url = "raw",
            mediaable_id = 1,
            mediaable_type = 'product',
        ),
        Media(
            url = "raw",
            mediaable_id = 2,
            mediaable_type = 'produasdct',
        ),
    ]
    db.session.add_all(objects)
    db.session.commit()


def undo_medias():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()