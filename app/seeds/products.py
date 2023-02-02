from app.models import db, environment, SCHEMA, Product

def seed_products():
    objects = [
        Product(
            seller_id = 1,
            department_id = 4,
            price = 869.99,
            name = "Laptop HP model 154",
            description = "New Latptop ready to use",
            discount = 5,
            stock = 5
        ),
    ]
    db.session.add_all(objects)
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()