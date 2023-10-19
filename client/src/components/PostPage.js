import React, {useState, useEffect} from "react";
import Header from "./Header";
import PostList from "./PostList";
import SearchBar from "./SearchBar";

function PostPage({posts}) {
    const [search, setSearch] = useState("")

    // Search houses by address
    function searchBar(event) {
        setSearch(event.target.value)
    }
    const filteredHouses = posts.filter(post => post.house.address.toLowerCase().includes(search))

    return (
        <main>
            <Header />
            <SearchBar
                searchBar={searchBar} />
            <PostList
                posts={filteredHouses}
                />
        </main>
    );
}

export default PostPage;