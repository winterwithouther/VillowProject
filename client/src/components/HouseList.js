import React from "react";
import MoreButton from "./MoreButton";
import LessButton from "./LessButton";
import HouseCard from "./HouseCard";

function HouseList({houses, moreHouses, lessHouses}) {
    const renderHouseCards = houses.map(house => {
        return <HouseCard 
            key={house.id}
            {...house}
            />
    })

    return (
        <div className="cards">
            {renderHouseCards}
            <LessButton lessHouses={lessHouses}/>
            <MoreButton moreHouses={moreHouses}/>
        </div>
    );
}

export default HouseList;