from app.models import db, environment, SCHEMA, Seller

def seed_products():
    objects = [
        Seller(name = 'HP'),
        Seller(name = 'Dell'),
        Seller(name = 'Asus'),
        Seller(name = 'Apple'),
        Seller(name = 'Samsung'),
        Seller(name = 'Bose'),
        Seller(name = 'Shure'),
        Seller(name = 'Sony'),
        Seller(name = 'Nikon'),
        Seller(name = 'Canon'),
        Seller(name = 'Philips'),
        Seller(name = 'Kasa'),
        Seller(name = 'Wyze'),
    ]
    db.session.add_all(objects)
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()