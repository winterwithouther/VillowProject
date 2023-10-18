#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, House, User, Post

fake = Faker()

# def create_houses():
#     houses = []
#     for _ in range(10):
#         h = House(
#             address = fake.name(),
#             description = fake.sentence(),
#             num_of_beds = randint(1, 5),
#             num_of_baths = randint(1, 5),
#             square_feet = randint(1200, 6000)
#             house_img = fake.image_url()
#         )
#         houses.append(h)

#     return houses


house1 = House(
    address = "30 Palm Ave, Miami Beach, FL 33139",
    description = "In a league of its own, this modern estate redefines luxury living on guard gated Palm Island. Nestled on an expansive 32,000 SF lot, enjoy 9 beds 8/1 baths perfectly set on 13,144 SF of total area. The chef’s kitchen is an epicurean delight w top of the line appliances, water views and walk in refrigerator. The expansive primary suite features private balcony, oversized closets, marble bathroom and private balcony. Entertaining is elevated to an art form with numerous outdoor areas thoughtfully integrated into the estate's design all with bay and skyline views. Highlights include wine cellar, movie theater, gym, staff area with dual rooms, pet room and elevator. Private dock, 100 feet of water frontage and direct ocean access complete this masterpiece. When only the best will do.",
    num_of_beds = 9,
    num_of_baths = 9,
    square_feet = 13144,
    house_img = "https://photos.zillowstatic.com/fp/b179a7bc6a1bfab1ea470e5099fb94e6-cc_ft_1536.webp"
)
house2 = House(
    address = "27 Star Island Dr, Miami Beach, FL 33139",
    description = "Step Inside with Me! Twenty Seven Star: A SAOTA Art of Work. A true unification of design, engineering, and grandeur, this Star Island dual-estate totals nearly 23,000 SF of meticulously crafted interiors and sophisticated style. Iconic in its introduction, reflective ponds and concrete privacy screens lead to a salon with 21ft ceilings. Acoustic paneled walls, a hosting bar & lounge with Olive Tree views, an industrial glam kitchen suited for a Michelin chef, and two media rooms complete the social areas. Retractable Peetz glass doors create a seamless transition to the amenities: resort pool, gym, sauna, bar, and garden. Step in time to a Walter De Garmo 1920's guest house reimagined to the highest standards. Star Island is Miami Beach’s most prestigious island enclave of 35 bay estates.",
    num_of_beds = 9,
    num_of_baths = 12,
    square_feet = 19778,
    house_img = "https://photos.zillowstatic.com/fp/3d7a3c89055ecd66adee52f410cba2de-cc_ft_768.webp",
)
house3 = House(
    address = "37 Star Island Dr, Miami Beach, FL 33139",
    description = "Located on exclusive guard-gated Star Island this residence boasts a manicured 40,000 SF lot, and actual area of 12,374 SF, 6BR plus an office, 8+1BA, and 100FT of sparkling waterfront. Impressive foyer with soaring 30+FT ceilings and custom staircase, exquisite Travertine floors and custom millwork throughout, expansive living room and entertainment room/bar all with large windows and amazing views to the pool and bay. A private dining area, chef’s kitchen with top-of-the-line appliances and a separate breakfast room. The large bay-facing principal suite features dual walk-in closets and dual bathrooms. Upstairs has 4 large guest bedrooms with en-suite baths & oversized Plaza Deck terraces. ",
    num_of_beds = 6,
    num_of_baths = 9,
    square_feet = 9747,
    house_img = "https://photos.zillowstatic.com/fp/984c740d500905ecc6d6ec583d70625b-cc_ft_384.webp",
)
house4 = House(
    address = "1 Star Island Dr, Miami Beach, FL 33139",
    description ="1 Star Island Dr, Miami Beach, FL 33139 is a single family home that contains 7,988 sq ft and was built in 1940. It contains 6 bedrooms and 10 bathrooms. This home last sold for $35,000,000 in August 2021. ",
    num_of_beds = 6,
    num_of_baths = 10,
    square_feet = 7988,
    house_img ="https://photos.zillowstatic.com/fp/53448cb6a541a6f34758ee98e3518a23-cc_ft_768.webp",

)
house5 = House(
    address = "294 S Coconut Ln, Miami Beach, FL 33139",
    description = "Welcome to your dream waterfront oasis! Presenting an exceptional opportunity to build your own luxurious paradise with this brand new, under-construction masterpiece, nestled in the highly sought-after neighborhood of Palm Island.  This contemporary gem is over 4,400 sqft with 5 bedrooms and 5 bathrooms, offering ample space for comfortable living and entertaining.   Positioned perfectly to capture breathtaking sunsets, this south-facing home provides an unobstructed panorama of the downtown skyline, creating an enchanting backdrop for every occasion.   With 78 feet of linear water frontage, indulge in the ultimate waterfront lifestyle, complete with direct bay access for boating enthusiasts, ensuring effortless journeys to the sparkling Atlantic Ocean.",
    num_of_beds = 5,
    num_of_baths = 6,
    square_feet = 4429,
    house_img = "https://photos.zillowstatic.com/fp/49f4e963545ad7da0de4471d0d978158-cc_ft_768.webp",
)
house6 = House(
    address = "130 Palm Ave, Miami Beach, FL 33139",
    description = "One of the finest custom-built homes on its way to completion adorned with intricate design in marble, wood and brass works. Kobi Karp architecture in collaboration with Argent Design working together to create this innovative, visually stunning Stately estate with finishes and details of the highest quality. Unique large open Club room with private rooftop pool, detached guest house with gym and therapy room. 9 bedrooms, 4 car garage with lifts, theater, office, butler’s kitchen, and laundry. Fully automated smart home, Crestron touchscreens and Lutron keypads. Italian doors and mill work, custom lighting, marble wine display, and rooftop terrace with breathtaking panoramic views of Downtown and South Beach. Located on prestigious gated and police protected Palm Island.",
    num_of_beds = 9,
    num_of_baths = 15,
    square_feet = 15132,
    house_img = "https://photos.zillowstatic.com/fp/13018a40cbc226e3bd2e4f7f8f8e0281-cc_ft_1536.webp",
)
house7 = House(
    address = "250 S Hibiscus Dr, Miami Beach, FL 33139",
    description = "Welcome to your fully updated waterfront sanctuary in the heart of Miami Beach. This 4 bedroom , 4 bathroom single-family home, elegantly positioned on the Intracoastal Waterways and paired with an unparalleled panorama of the Miami's famous downtown skyline. Every corner of this home has been impeccably updated and thoughtfully redesigned, showcasing a modern open-concept layout bathed in natural light. High-end fixtures and finishes are hallmarks of this home's contemporary luxury. The backyard is nothing short of incredible, designed to leave a lasting impression with the incredible water features, lush landscaping and 60 feet of waterfrontage.  Don't miss your chance to make this modern waterfront dream a reality. Contact us today to schedule a private tour",
    num_of_beds = 4,
    num_of_baths = 4,
    square_feet = 3629,
    house_img = "https://photos.zillowstatic.com/fp/8369e75ead0206b25de72cc95e850605-cc_ft_1536.webp",
)   
house8 = House(
    address = "16 Palm Ave, Miami Beach, FL 33139",
    description = "Mediterranean Revival home fully renovated in 2009.  The gut renovation included a large addition hosting the new master bedroom, kitchen and family wing.  This gem sits nestled inside lavish and exotic specimens on a 35,348 sq ft lot with prime south exposure with 220’ of waterfront capable of docking up to a 205’ boat.  Enjoy amenities such as home theater, gym, steam rooms, bocce court, center courtyard & wine cellar in Police gated Palm Island.  The home is fitted with all of the latest technologies such as lighting control systems, smart home technology,  solar panels, heated pool & spa, beach area and a separate guest house.",
    num_of_beds = 6,
    num_of_baths = 7,
    square_feet = 9209,
    house_img =  "https://photos.zillowstatic.com/fp/a77ed45dae78c8f9e4d4cd278d956ad9-cc_ft_1536.webp",
)
house9 = House(
    address = "441 N Hibiscus Dr, Miami Beach, FL 33139",
    description = "This spectacular contemporary tri-level waterfront home is located on the tip of guard-gated Hibiscus Island featuring a rooftop entertainment lounge & the best open bay & Miami skyline views on Miami Beach. The 5BR/6+1BA home boasts granite & hardwood floors, soaring ceilings, fine designer finishes, floor to-ceiling windows, sleek chef’s kitchen w/top-of-the line appliances, & expansive living/entertainment areas w/amazing water views. 2nd level principal suite w/private terrace facing the bay, & spa-inspired marble bathroom & large walk-in closet. 3rd level rooftop lounge made to relax & enjoy sunsets over the bay & Miami skyline. The outdoor spaces offer covered seating areas, summer kitchen, pool w/waterfall, cabana bath, large dock & Ocean access. Also available for rent (furnished).",
    num_of_beds = 5,
    num_of_baths = 7,
    square_feet = 4827,
    house_img = "https://photos.zillowstatic.com/fp/e052ecf3891b69518240464abc9cbdf9-cc_ft_768.webp",
)
house10 = House(
    address = "316 S Coconut Ln, Miami Beach, FL 33139",
    description = "Discover this amazing opportunity to build your dream home or renovate the existing 2-story waterfront home on the coveted Western tip of Palm Island offering stunning unobstructed views of the Miami Skyline & Biscayne Bay. Sports travertine & original wood flooring, large family/entertainment room & open living area w/direct access to pool deck & water views. Open kitchen w/eat-in center island & adjacent dining area. Spacious 2nd floor principal suite boasts custom closet spaces & lounge area that overlooks the city & bay. The outdoor spaces designed to entertain featuring a heated pool, comfortable seating areas, and a covered porch with al fresco dining table to enjoy stunning sunsets over Biscayne Bay. Boaters will enjoy 78’ of waterfront, a large private dock & easy ocean access.",
    num_of_beds = 4,
    num_of_baths = 5,
    square_feet = 2767,
    house_img = "https://photos.zillowstatic.com/fp/081a37eb3869cee264a7b27051b26c41-cc_ft_768.webp",
)

house = [house1, house2, house3, house4, house5, house6, house7, house8, house9, house10]


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
        db.session.add(house1)
        db.session.add(house2)
        db.session.add(house3)
        db.session.add(house4)
        db.session.add(house5)
        db.session.add(house6)
        db.session.add(house7)
        db.session.add(house8)
        db.session.add(house9)
        db.session.add(house10)
        db.session.commit()

        print("Seeding users")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()

        print("Seeding posts")
        posts = create_posts(house,users)
        db.session.add_all(posts)
        db.session.commit()

        print("Done seeding!")