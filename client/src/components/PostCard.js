import React, {useState} from "react";
import DeleteButton from "./DeleteButton";
import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";

function PostCard({address, price, house_img, num_of_baths, num_of_beds, description, square_feet, user, onClickHeartAddToCollection,deleteHouses}) {
    const [favorite, setIsFavorite] = useState(true);

    function handleClick() {
    setIsFavorite(!favorite)
    fetch("/api/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            address: address,
            price: price,
            house_img: house_img,
            num_of_baths: num_of_baths,
            num_of_beds: num_of_beds,
            description: description,
            square_feet: square_feet,
            user: user,
        }),
    })
        .then((r) => r.json())
        .then(data => onClickHeartAddToCollection(data))
}
    const favoriteHouse = favorite ? <BsSuitHeart onClick={handleClick} /> : <BsSuitHeartFill onClick={handleClick} />;
    return (<>
        <div className = "property-card">
            <div className="property-image">
            <img src={house_img} alt={address}></img>
            </div>
            <div className="property-details">
            <h4>{address}</h4>
            <p>Price: {price}</p>
            <p>Beds: {num_of_beds}</p>
            <p>Baths: {num_of_baths}</p>
            <p>Sqft: {square_feet}</p>
            <p>Description: {description}</p>
            <h5>Lister: {user}</h5>
            <span className="favorite">{favoriteHouse}</span>
            <div className="deleteBtn">
            <DeleteButton deleteHouses={deleteHouses}/>
            </div>
            </div>
        </div>
    </>)
}

export default PostCard;