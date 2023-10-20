import React, { useState, useEffect } from "react";
import Header from "./Header";
import PostList from "./PostList";

function PostForm({posts, onAddPost}) {
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [num_of_beds, setNumOfBeds] = useState('')
    const [num_of_baths, setNumOfBaths] = useState('')
    const [square_feet, setSquareFeet] = useState('')
    const [house_img, setHouseImg] = useState('')

    const [price, setPrice] = useState('')
    const [favorited, setFavorited] = useState('')
    const [house_id, setHouseId] = useState('')
    const [user_id, setUserId] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        const newHouse = {
            address: address,
            description: description,
            num_of_beds: num_of_beds,
            num_of_baths: num_of_baths,
            square_feet: square_feet,
            house_img: house_img,
        }

        // const newPost = {
        //     price: price,
        //     favorited: favorited,
        //     house_id: house_id,
        //     user_id: user_id,

        // }
    
        fetch("/houses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newHouse),
        })
          .then((r) => r.json())
          .then((newHouse, newPost) => {
            onAddPost(newHouse);
            setAddress("");
            setDescription("");
            setNumOfBeds("");
            setNumOfBaths("");
            setSquareFeet("");
            setHouseImg("");
            // setPrice("");
            // setFavorited("");
            // setHouseId("");
            // setUserId("");
          });
      }

    return (<>
        <Header/>
            Post Form
        <form className="new-post" onSubmit={handleSubmit}>
        <input
            placeholder="address..."
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        />
        <input
            placeholder="description..."
            type="text"
            name="decription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <input
            placeholder="beds..."
            type="text"
            name="number_of_beds"
            value={num_of_beds}
            onChange={(e) => setNumOfBeds(e.target.value)}
        />
        <input
            placeholder="baths..."
            type="text"
            name="number_of_baths"
            value={num_of_baths}
            onChange={(e) => setNumOfBaths(e.target.value)}
        />
        <input
            placeholder="square_feet..."
            type="text"
            name="square_feet"
            value={square_feet}
            onChange={(e) => setSquareFeet(e.target.value)}
        />
        <input
            placeholder="image url..."
            type="text"
            name="house_image"
            value={house_img}
            onChange={(e) => setHouseImg(e.target.value)}
        />
        {/* <input
            placeholder="price..."
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        />
        <input
            placeholder="favorite..."
            type="text"
            name="favorite"
            value={favorited}
            onChange={(e) => setFavorited(e.target.value)}
        />
        <input
            placeholder="house_id..."
            type="text"
            name="house_id"
            value={house_id}
            onChange={(e) => setHouseId(e.target.value)}
        />
        <input
            placeholder="user_id..."
            type="text"
            name="user_id"
            value={user_id}
            onChange={(e) => setUserId(e.target.value)}
        /> */}
        <button type="submit">Add Post</button>
        </form>
        <PostList
            posts={posts}
        />
    </>)
}

export default PostForm