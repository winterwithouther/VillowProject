import React from "react";

function PostCard({address, price, house_img, num_of_baths, num_of_beds, description, square_feet, user}) {
    return (<>
        <div>
            <img src={house_img} alt={address}></img>
            <h4>{address}</h4>
            <p>Price: {price}</p>
            <p>Beds: {num_of_beds}</p>
            <p>Baths: {num_of_baths}</p>
            <p>Sqft: {square_feet}</p>
            <p>description: {description}</p>
            <h5>Lister: {user}</h5>
        </div>
    </>)
}

export default PostCard;