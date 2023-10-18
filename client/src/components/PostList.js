import React from "react";
import MoreButton from "./MoreButton";
import LessButton from "./LessButton";
import PostCard from "./PostCard";

function PostList({posts, morePosts, lessPosts}) {
    const displayPosts = posts.map(post => {
        return <PostCard 
            key={post.id}
            price={post.price}
            address={post.house.address}
            description={post.house.description}
            num_of_baths={post.house.num_of_baths}
            num_of_beds={post.house.num_of_beds}
            square_feet={post.house.square_feet}
            house_img={post.house.house_img}
            user={post.user.name}
            />
    })

    return (
        <div className="cards">
            {displayPosts}
            <LessButton lessPosts={lessPosts}/>
            <MoreButton morePosts={morePosts}/>
        </div>
    );
}

export default PostList;