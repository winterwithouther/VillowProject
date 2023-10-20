import React from "react";

function DeleteButton({id}) {

    function deleteHouses () {
        fetch("/houses/" + id, {
            method: "DELETE",
        })
        .then(res => {
            if (res.ok) {
                console.log(id)
            }
        })
    }

    return <button onClick={deleteHouses}>Delete this home</button>;
}

export default DeleteButton;