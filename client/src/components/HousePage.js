import React, {useState, useEffect} from "react";
import HouseList from "./HouseList";
import SearchBar from "./SearchBar";

function HousePage() {
    const [houses, setHouses] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5555/houses")
        .then(res => res.json())
        .then(data => setHouses(data))
    }, [])

    function searchBar(event) {
        setSearch(event.target.value)
      }
    const filteredHouses = houses.filter(house => house.address.toLowerCase().includes(search))

    return (
        <main>
            <SearchBar
                searchBar={searchBar} />
            <HouseList 
                houses={filteredHouses} />
        </main>
    );
}

export default HousePage;