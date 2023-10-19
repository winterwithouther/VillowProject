import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>
                Villow
                <span className="logo" role="img">
                </span>
            </h1>
            <nav>
                <div>
                    <Link className="button" to="/">
                        Pillow
                    </Link>
                    <Link className="button" to="/posts">
                        All Posts
                    </Link>
                    <Link className="button" to="/posts/new">
                        Add Post
                    </Link>
                    <Link className="button" to="/favorites">
                        Favorites
                    </Link>
                    <Link className="button" to="/profile">
                        Profile
                    </Link>
                    <Link className="button" to="/login">
                        Login
                    </Link>
                    <Link className="button" to="/Signup">
                        Signup
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;