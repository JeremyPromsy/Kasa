import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../assets/LogoRouge.png";
import "../styles/nav.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-img" src= {logoNav} alt ="logo" /> 
            </div>
            <div className="nav-links">
                <NavLink
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/apropos"
                >
                    A propos
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar ;