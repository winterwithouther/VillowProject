import React, { useState, useEffect } from "react";

function PostForm() {

    const houseIntial = {
        "address" : "",
        "description" : "",
        "house_img" : "",
        "num_of_beds" : "",
        "num_of_baths" : "",
        "square_feet" : ""
    }

    const postInitial = {
        "house_id" : "",
        "user_id" : "",
        "price" : ""
    }

    const [house, setHouse] = useState(houseIntial)
    const [post, setPost] = useState(postInitial)

    function handleChange(event) {
        const {name, value} = event.target

        if (name === "price") {
            setPost({
                ...post,
                [name] : value
            })
        } else {
            setHouse({
                ...house,
                [name] : value
            })
        }

        console.log(value)
    }

    return (<>
        <div>
            <form>
                <input name="address" type="text" value={house.address} placeholder="Address" onChange={handleChange}></input>
                <input name="price" type="number" value={post.price} placeholder="price" onChange={handleChange}></input>
                <input name="house_img" type="text" value={house.house_img} placeholder="image url" onChange={handleChange}></input>
                <input name="description" type="number" value={house.description} placeholder="description" onChange={handleChange}></input>
                <input name="num_of_beds" type="number" value={house.num_of_beds} placeholder="number of beds" onChange={handleChange}></input>
                <input name="num_of_baths" type="number" value={house.num_of_baths} placeholder="number of baths" onChange={handleChange}></input>
                <input name="square_feet" type="number" value={house.square_feet} placeholder="square feet" onChange={handleChange}></input>
            </form>
        </div>
    </>)
}

export default PostForm