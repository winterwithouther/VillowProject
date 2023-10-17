#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, House, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        user1 = User(name="Eman")
        db.session.add(user1)
        db.session.commit()

        user2 = User(name="Bailey")
        db.session.add(user2)
        db.session.commit()

        user3 = User(name="Doug")
        db.session.add(user3)
        db.session.commit()

        user4 = User(name="Matthew")
        db.session.add(user4)
        db.session.commit()
        

        