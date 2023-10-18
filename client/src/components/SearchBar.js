import React from "react";
// import {BsSearch} from 'react-icons/bs'


function SearchBar({searchBar}) {

    return(
        <div id="searchBar">
            <label htmlFor="search">Homes</label>
            <input 
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                id="search"
                onChange={(event) => {searchBar(event)}}
            />
            {/* <BsSearch id="SearchButton"/> */}
        </div>
    )
}

export default SearchBar;