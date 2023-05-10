import React from "react";
import { NavLink } from "react-router-dom";
import logoFooter from "../assets/LogoBlanc.png";
import "../styles/footer.css"

function Footer() {
    return (
        <div className="footer">
            <NavLink to="/"><img className="logofooter" src={logoFooter} alt= "logo de Kasa" /></NavLink>
            <div className="copyright">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;