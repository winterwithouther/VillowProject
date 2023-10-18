import React, {useState, useEffect} from "react";
import HouseList from "./HouseList";
import SearchBar from "./SearchBar";

function HousePage() {
    const [houses, setHouses] = useState([])
    const [search, setSearch] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch("http://127.0.0.1:5555/houses")
        .then(res => res.json())
        .then(data => setHouses(data))
    }, [])

    // Display 4 more or less houses HousePage
    const fourHouses = houses.slice(index, index + 4);
    function moreHouses() {
        if (index < houses.length - 4) {
            setIndex(index + 4)
        }     
    }
    function lessHouses() {
        if (index > 0) {
            setIndex(index - 4)
        }
    }

    // Search functionality
    function searchBar(event) {
        setSearch(event.target.value)
      }
    const filteredHouses = houses.filter(house => house.address.toLowerCase().includes(search))

    return (
        <main>
            <SearchBar
                searchBar={searchBar} />
            <HouseList
                houses={fourHouses}
                moreHouses={moreHouses}
                lessHouses={lessHouses}
                // houses={filteredHouses} 
                />
        </main>
    );
}

export default HousePage;