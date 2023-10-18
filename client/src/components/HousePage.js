import React, {useState, useEffect} from "react";
import HouseList from "./HouseList";
import Search from "./SearchBar";

function HousePage() {
    const [houses, setHouses] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch()
        .then(res => res.json())
        .then(data => setHouses(data))
    }, [])

    return (
        <main>
            <SearchBar />
            <HouseList 
                houses={houses} />
        </main>
    );
}

export default HousePage;