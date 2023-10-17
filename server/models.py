from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class House(db.Model, SerializerMixin):
    __tablename__ = 'houses'
    
    id = db.Column(db.Integer, primary_key = True)
    address = db.Column(db.String)
    description = db.Column(db.String)
    num_of_beds = db.Column(db.String)
    num_of_baths = db.Column(db.String)
    square_feet = db.Column(db.Integer)

    posts = db.relationship("Post", backref="house", cascade="all, delete-orphan")

    serialize_rules = ("-posts.house", )

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    posts = db.relationship("Post", backref="user", cascade="all, delete-orphan")

    serialize_rules = ("-posts.user", )

    @validates("name")
    def validate_name(self, key, name):
        if name and len(name) > 1:
            return name
        raise ValueError("Name must but greater than 1 character.")


class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer)
    house_id = db.Column(db.Integer,db.ForeignKey("houses.id"))
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))

    serialize_rules = ("-house.posts", "-user.posts",)

    @validates("price"):
    def validate_price(self, key, price):
        if 0 < price < 100000000:
            return price
        raise ValueError("Price must be greater than 0 and less than 100 million.")

    @validates("house_id"):
    def validate_house(self, key, house_id):
        if house_id:
            return house_id
        raise ValueError("Must have a House id.")

    @validates("user_id"):
    def validate_user(self, key, user_id):
        if user_id:
            return user_id
        raise ValueError("Must have a User id.")