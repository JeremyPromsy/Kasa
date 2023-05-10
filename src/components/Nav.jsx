import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../assets/LogoRouge.png";
import "../styles/nav.css"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
            <NavLink to="/"><img className="logo-img" src= {logoNav} alt ="logo Kasa" /> </NavLink>
            </div>
            <div className="nav-links">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/apropos">A propos</NavLink>
            </div>
        </div>
    )
}

export default Navbar ;