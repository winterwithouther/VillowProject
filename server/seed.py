#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, House, User, Post

fake = Faker()

def create_houses():
    houses = []
    for _ in range(10):
        h = House(
            address = fake.name(),
            description = fake.sentence(),
            num_of_beds = randint(1, 5),
            num_of_baths = randint(1, 5),
            square_feet = randint(1200, 6000)
        )
        houses.append(h)

    return houses

def create_users():
    users = []
    for _ in range(5):
        u = User(
            name = fake.name()
        )
        users.append(u)

    return users

def create_posts(houses, users):
    posts = []
    for _ in range(10):
        p = Post(
            price = randint(400000, 700000),
            house_id = rc([house.id for house in houses]),
            user_id = rc([user.id for user in users])
        )
        posts.append(p)

    return posts


if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        House.query.delete()
        User.query.delete()
        Post.query.delete()

        print("Seeding houses")
        houses = create_houses()
        db.session.add_all(houses)
        db.session.commit()

        print("Seeding users")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Seeding posts")
        posts = create_posts(houses, users)
        db.session.add_all(posts)
        db.session.commit()

        print("Done seeding!")