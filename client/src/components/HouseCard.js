import React from "react";

function HouseCard({id, address, description, num_of_beds, num_of_baths, square_feet, house_img}) {
    return (
        <li className="card">
            <img src={house_img} alt={address} />
            <h4>{address}</h4>
            <p>Beds: {num_of_beds}</p>
            <p>Baths: {num_of_baths}</p>
            <p>Sqft: {square_feet}</p>

      </li>
    )
}

export default HouseCard;