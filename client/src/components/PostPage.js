import React, {useState, useEffect} from "react";
import Header from "./Header";
import PostList from "./PostList";
import SearchBar from "./SearchBar";

function PostPage() {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch("http://127.0.0.1:5555/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    console.log(posts)

    // Display 4 more or less houses HousePage
    // const fourPosts = posts.slice(index, index + 4);
    // function morePosts() {
    //     if (index < posts.length - 4) {
    //         setIndex(index + 4)
    //     }     
    // }
    // function lessPosts() {
    //     if (index > 0) {
    //         setIndex(index - 4)
    //     }
    

    // Search functionality
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