import React from "react"
import "../App"
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <div className="navbar">
            <div>
                <h1>React Books App</h1>
            </div>
            <div className="nav-content">
                <Link to="/favorites">
                    <h3>My Favorites</h3>
                </Link>
                <Link to='/'>
                    <h3>Home</h3>
                </Link>
            </div>
        </div>
    )
}

export default Navbar