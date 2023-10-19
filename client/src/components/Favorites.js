import Header from "./Header"
import PostCard from "./PostCard"

function Favorites(list, onClickHeartAddToCollection) {
    const postCard =list.map((post) => <PostCard key={post.id} {...post} onClickHeartAddToCollection={onClickHeartAddToCollection}/>)
    return <>
        <Header/>
        Favorites
        {postCard}
    </>
}

export default Favorites