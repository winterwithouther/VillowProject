import React from "react";
import Header from "./Header";
import PostCard from "./PostCard";

function Favorites({ posts, onClickHeartAddToCollection }) {
  const postCards = posts.map((post) => (
    <PostCard key={post.id} {...post} onClickHeartAddToCollection={onClickHeartAddToCollection} />
  ));

return (
    <>
    <Header />
    <div>Favorites</div>
    {postCards}
    </>
);
}

export default Favorites;
