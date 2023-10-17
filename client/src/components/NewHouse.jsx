import React, { useState, useEffect } from "react";

function NewHouse(){
    const [formData, setFormData] = useState({
        address:"",
        description:"",
        num_of_beds:"",
        num_of_baths:"",
        square_feet:"",
        house_im:""
    });

    const [house, setHouse] = useState([]);

    useEffect(() => {
        const fetchHouses = async() =>{
            const res = await fetch("/houses");
            const houseArr = await res.json();
            setHouse(houseArr)
        };

        fetchHouses().catch(console.error);
    }, []);
}

function handleChange(e) {
    
}