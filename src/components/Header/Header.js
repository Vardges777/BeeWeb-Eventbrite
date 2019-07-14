import React from "react";
import { NavLink } from "react-router-dom"


function Header(){
    return(
        <nav>
            <NavLink exact activeClassName="currentLink" to="/">
                Sign Up
            </NavLink>
            <NavLink activeClassName="currentLink" to="/LogIn">
                Log In
            </NavLink>
        </nav>
    )
}

export default Header
