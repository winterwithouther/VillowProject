import React from "react";
import HouseCard from "./HouseCard";

function HouseList({houses}) {
    const renderHouseCards = houses.map((house) => {
        return <HouseCard 
            key={house.id}
            {...house}
            />
    })

    return (
        <ul className="cards">{renderHouseCards}</ul>
    );
}

export default HouseList;