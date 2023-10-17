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

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer)
    house_id = db.Column(db.Integer,db.ForeignKey("houses.id"))
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))

    serialize_rules = ("-house.posts", "-user.posts",)