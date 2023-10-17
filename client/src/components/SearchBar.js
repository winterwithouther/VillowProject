import React from "react";
import {BsSearch} from 'react-icons/bs'


function SearchBar({updateSearch, searchValue}) {

    const handleChange = (e) => {updateSearch(e.target.value)}
    return(
        <div id="searchBar">
            <input type="text"
            placeholder="search"
            id="search"
            value={searchValue}
            onChange={handleChange}
            />
            <BsSearch id="SearchButton"/>
        </div>
    )
}

export default SearchBar;