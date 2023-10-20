from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
import os

from config import db

from config import db, bcrypt

# convention = {
#     "ix": "ix_%(column_0_label)s",
#     "uq": "uq_%(table_name)s_%(column_0_name)s",
#     "ck": "ck_%(table_name)s_%(constraint_name)s",
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
#     "pk": "pk_%(table_name)s"
# }

# metadata = MetaData(naming_convention=convention)

# db = SQLAlchemy(metadata=metadata)

class House(db.Model, SerializerMixin):
    __tablename__ = 'houses'
    
    id = db.Column(db.Integer, primary_key = True)
    address = db.Column(db.String)
    description = db.Column(db.String)
    num_of_beds = db.Column(db.String)
    num_of_baths = db.Column(db.String)
    square_feet = db.Column(db.Integer)
    house_img = db.Column(db.String)

    posts = db.relationship("Post", backref="house", cascade="all, delete-orphan")

    serialize_rules = ("-posts.house", )

    @validates('address')
    def validates_address(self,key,address):
        if not address or len(address)<1:
            raise ValueError("Must contain an address!")
        return address
    
    @validates('description')
    def validates_description(self,key,description):
        if not description or len(description)<1:
            raise ValueError("Must contain a description!")
        return description
    
    @validates('num_of_beds','num_of_baths')
    def validates_num_of_x(self,ket,num):
        if num < 1:
            raise ValueError("Must contain at least 1 bed or bath!")
        return num
    
    @validates('square_feet')
    def validates_square_feet(self,key,square_feet):
        if not square_feet or square_feet<100:
            raise ValueError("Must be larger then 100 square feet")
        return square_feet
    
    @validates('house_img')
    def validates_house_img(self,key,house_img):
        if not house_img or len(house_img)<1:
            raise ValueError("Must contain a image of the house!")
        return house_img
    
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    posts = db.relationship("Post", backref="user", cascade="all, delete-orphan")

    serialize_rules = ("-posts.user", )

    @validates("name")
    def validate_name(self, key, name):
        if name and len(name) > 1:
            return name
        raise ValueError("Name must but greater than 1 character.")
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode("utf-8"))
        self._password_hash = password_hash.decode("utf-8")

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode("utf-8"))
    
    def __repr__(self):
        return f"<User {self.name}>"

class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer)
    house_id = db.Column(db.Integer,db.ForeignKey("houses.id"))
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))

    serialize_rules = ("-house.posts", "-user.posts",)

    @validates("price")
    def validate_price(self, key, price):
        if 0 < price < 100000000:
            return price
        raise ValueError("Price must be greater than 0 and less than 100 million.")

    @validates("house_id")
    def validate_house(self, key, house_id):
        if house_id:
            return house_id
        raise ValueError("Must have a House id.")

    @validates("user_id")
    def validate_user(self, key, user_id):
        if user_id:
            return user_id
        raise ValueError("Must have a User id.")


