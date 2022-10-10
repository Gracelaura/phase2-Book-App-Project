import React from "react"
import "../App"
import {NavLink} from "react-router-dom"

function Navbar() {
    return(
        <div className="navbar">
            <div>
                <h1>React Books App</h1>
            </div>
            <div className="nav-content">
                <NavLink to="/favorites">
                    <h3>My Favorites</h3>
                </NavLink>
                <NavLink to='/'>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to="/addbook">
                    <h3> Add a book</h3>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar