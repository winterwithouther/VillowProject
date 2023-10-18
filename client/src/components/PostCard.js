import React, {useState} from "react";
import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";

function PostCard({address, price, house_img, num_of_baths, num_of_beds, description, square_feet, user}) {
   const [favorite, setIsFavorite] = useState(true);

   function handleClick() {
       setIsFavorite(!favorite);
   }
   const favoriteHouse = favorite ? <BsSuitHeartFill onClick={handleClick} /> : <BsSuitHeart onClick={handleClick} />;
    return (<>
        <div>
            <span className="favorite">{favoriteHouse}</span>
            <img src={house_img} alt={address}></img>
            <h4>{address}</h4>
            <p>Price: {price}</p>
            <p>Beds: {num_of_beds}</p>
            <p>Baths: {num_of_baths}</p>
            <p>Sqft: {square_feet}</p>
            <p>Description: {description}</p>
            <h5>Lister: {user}</h5>
        </div>
    </>)
}

export default PostCard;