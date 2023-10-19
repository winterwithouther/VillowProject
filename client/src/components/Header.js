import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="container">
    <div className="left">
        <Link className="main-button" to="/">
            Pillow
        </Link>
        <Link className="all-button" to="/posts">
            Search Houses
        </Link>
        <Link className="add-button" to="/posts/new">
            Add Listing
        </Link>
    </div>
    <div className="center">
        <h1>
            <img src="https://i.gyazo.com/a7d613272ba5d70a3f39574a0c9fff67.png" alt="Pillow Logo" className="logo" />
        </h1>
    </div>
    <div className="right">
        <Link className="fav-button" to="/favorites">
            Favorites
        </Link>
        <Link className="profile-button" to="/profile">
            Your Profile
        </Link>
        <Link className="login-button" to="/login">
            Login
        </Link>
        <Link className="signup-button" to="/signup">
            Signup
        </Link>
    </div>
</div>
    );
}

export default Header;