from flask.cli import AppGroup
from .sellers import seed_sellers, undo_sellers
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .departments import seed_departments, undo_departments
from .medias import seed_medias, undo_medias


from app.models import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.Users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Sellers RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Products RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Deparments RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Medias RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Orders RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Reviews RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.Orders_Products RESTART IDENTITY CASCADE;")
        
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below

    # Add other seed functions here
    seed_users()
    seed_sellers()
    seed_products()
    seed_departments()
    seed_medias()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # Add other undo functions here
    undo_sellers()
    undo_users()
    undo_products()
    undo_departments()
    undo_medias()