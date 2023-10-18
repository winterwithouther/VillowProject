import React, {useState} from "react";
import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";

function HouseCard({id, address, description, num_of_beds, num_of_baths, square_feet, house_img}) {

    const [favorite, setIsFavorite] = useState(true);

    function handleClick() {
        setIsFavorite(!favorite);
    }

    const favoriteHouse = favorite ? <BsSuitHeartFill onClick={handleClick} /> : <BsSuitHeart onClick={handleClick} />;
    return (
        <li className="card">
            <span className="favorite">{favoriteHouse}</span>
            <img src={house_img} alt={address} />
            <h4>{address}</h4>
            <p>Beds: {num_of_beds}</p>
            <p>Baths: {num_of_baths}</p>
            <p>Sqft: {square_feet}</p>

        </li>
    )
}

export default HouseCard;