import React, {useState, useEffect} from "react";
import Header from "./Header";
import PostList from "./PostList";
import HouseList from "./HouseList"
import SearchBar from "./SearchBar";

function PostPage({houses}) {
    const [search, setSearch] = useState("")

    // Search houses by address
    function searchBar(event) {
        setSearch(event.target.value)
    }
    const filteredHouses = houses.filter(house=> house.address.toLowerCase().includes(search))

    return (
        <main>
            <Header />
            <SearchBar
                searchBar={searchBar}
                />
            <HouseList
                houses={filteredHouses}
                />
        </main>
    );
}

export default PostPage;