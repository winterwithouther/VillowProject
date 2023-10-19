import React, {useState} from "react";
import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";

function PostCard({ address, price, house_img, num_of_baths, num_of_beds, description, square_feet, user, favorited, handleAddToFavorites, handleDeleteFromFavorites}) {
    const [favorite, setFavorites] = useState(true)

    // function handleClick() {
    //     fetch("/posts/" + id, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ favorited: !favorited }),
    //     })
    //     .then((response) => response.json())
    //     .then(data => {
    //         handleAddToFavorites(data)

    //         console.log(data)

    //         if (data.favorited) {
    //             fetch("/favorites", {
    //             method: "POST",
    //             headers: { "content-type": "application/json" },
    //             body: JSON.stringify(data)
    //             })
    //             .then(response => response.json())
    //             .then(postData => {
    //                 console.log(postData)
    //             })
    //         } else {
    //             fetch("/favorites/" + id, {
    //             method: "DELETE"
    //             })
    //             .then(response => response.json())
    //             .then(() => {
    //                 handleDeleteFromFavorites(data)
    //             })
    //         }
    //     })
    // }

    return (<>
        <div>
            <img src={house_img} alt={address}></img>
            {/* <button className="favButton" onClick={handleClick}>{favorite ? <BsSuitHeartFill/> : <BsSuitHeart/>}</button> */}
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