from app.models import db, environment, SCHEMA, Department
from sqlalchemy.sql import text

def seed_departments():
    objects = [
        Department(name = 'Clothing, Shoes, Jewerly & Watches'),
        Department(name = 'Books'),
        Department(name = 'Movies, Music & Games'),
        Department(name = 'Electronics'),
        Department(name = 'Computers'),
        Department(name = 'Home, Garden & Tools'),
        Department(name = 'Pet Supplies'),
        Department(name = 'Beauty & Health'),
        Department(name = 'Toys, Kids & Baby'),
        Department(name = 'Handmade'),
        Department(name = 'Sports'),
        Department(name = 'Outdoors'),
        Department(name = 'Automotive & Industrial'),
        Department(name = 'Industrial & Scientific'),
    ]
    db.session.add_all(objects)
    db.session.commit()


def undo_departments():
    if environment == "production":
        db.session.execute(text(f"TRUNCATE table {SCHEMA}.Departments RESTART IDENTITY CASCADE;"))
    else:
        db.session.execute("DELETE FROM Departments")

    db.session.commit()