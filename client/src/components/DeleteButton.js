import React from "react";

function DeleteButton({deleteHouses}) {

    return <button onClick={deleteHouses}>Delete this home</button>;
}

export default DeleteButton;