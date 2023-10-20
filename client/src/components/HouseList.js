import React from "react";
import MoreButton from "./MoreButton";
import LessButton from "./LessButton";
import NewHouseButton from "./NewHouseButton";
import HouseCard from "./HouseCard";
import Header from "./Header";

function HouseList({houses, morePosts, lessPosts, newHouse,}) {
    const displayPosts = houses.map(post => {
        return <HouseCard 
            key={post.id}
            id={post.id}
            price={post.price}
            address={post.address}
            description={post.description}
            num_of_baths={post.num_of_baths}
            num_of_beds={post.num_of_beds}
            square_feet={post.square_feet}
            house_img={post.house_img}
            user={post.name}
            favorited={post.favorited}
            />
    })

    return (
        <div className="cards">
            {displayPosts}
        </div>
    );
}

export default HouseList;