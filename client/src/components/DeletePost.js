import React from "react";

function DeletePost({id}) {

    function deletePost () {
        fetch("/posts/" + id, {
            method: "DELETE",
        })
        .then(res => {
            if (res.ok) {
                console.log(id)
            }
        })
    }

    return <button onClick={deletePost}>Delete this home</button>;
}

export default DeletePost;