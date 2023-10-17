#!/usr/bin/env python3

# Standard library imports

from flask import Flask, make_response, jsonify, request

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import House, User, Post

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Houses(Resource):
    def get(self):
        houses = [house.to_dict() for house in House.query.all()]
        return make_response(houses, 200)
    
    def post(self):
        try:
            new_house = House(
                address = request.json["address"],
                description = request.json["description"],
                num_of_beds = request.json["num_of_beds"],
                num_of_baths = request.json["num_of_baths"],
                square_feet = request.json["square_feet"]
            )

            db.session.add(new_house)
            db.session.commit()

            return make_response(new_house.to_dict(), 201)
        except:
            return make_response({"erorr" : ["validation errors"]}, 404)
    
api.add_resource(Houses, "/houses")

class HousesById(Resource):
    def get(self, id):
        try:
            house = House.query.filter_by(id = id).first()  
            return make_response(house.to_dict(), 200)
        except:
            return make_response({"error" : "House get error"}, 404)

    def delete(self, id):
        try:
            house = House.query.filter_by(id = id).first()

            db.session.delete(house)
            db.session.commit()

            return make_response({}, 202)
        except:
            return make_response({"error" : "House delete error"}, 404)
        
    def patch(self, id):
        try:
            house = House.query.filter_by(id = id).one_or_none()

            request_json = request.get_json()

            for key in request_json:
                setattr(house, key, request_json[key])

            db.session.add(house)
            db.session.commit()

            return make_response(house.to_dict(), 200)
        except:
            return make_response({"erorr" : "House patch error"}, 404)

api.add_resource(HousesById, "/houses/<int:id>")

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]

        return make_response(users, 200)
    
    def post(self):
        try:
            new_user = User(name = request.json["name"])

            db.session.add(new_user)
            db.session.commit()

            return make_response(new_user.to_dict(), 200)
        except:
            return make_response({"error" : "Failed to make a new user"}, 404)

api.add_resource(Users, "/users")

class UsersById(Resource):
    def get(self, id):
        try:
            user = User.query.filter_by(id = id).first()

            return make_response(user.to_dict(), 200)
        except:
            return make_response({"error" : "User get erorr"}, 404)

    def patch(self, id):
        user = User.query.filter_by(id = id).first()

        request_json = request.get_json()

        for key in request_json:
            setattr(user, key, request_json[key])

        db.session.add(user)
        db.session.commit()

        return make_response(user.to_dict(), 200)

api.add_resource(UsersById, "/users/<int:id>")

if __name__ == '__main__':
    app.run(port=5555, debug=True)

