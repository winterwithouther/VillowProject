import React, {useState, useEffect} from "react";
import PostList from "./PostList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function Home({posts}) {
    const [search, setSearch] = useState("")
    const [index, setIndex] = useState(0)

    // Display 4 more or less houses in home page
    const fourPosts = posts.slice(index, index + 4);
    function morePosts() {
        if (index < posts.length - 4) {
            setIndex(index + 4)
        }     
    }
    function lessPosts() {
        if (index > 0) {
            setIndex(index - 4)
        }
    }

    return (
        <main>
            <Header />
            <PostList
                posts={fourPosts}
                morePosts={morePosts}
                lessPosts={lessPosts}
                />
        </main>
    );
}

export default Home;