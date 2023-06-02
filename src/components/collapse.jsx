import React, { useState } from 'react';
import haut from "../assets/FlecheHaut.png";
import bas from "../assets/FlècheBas.png";
import "../styles/collapse.css"

function Collapse ( { title, content, open } ) {
    const [ IsOpen, setIsOpen ] = useState () 
    return IsOpen?(
        <div className="collapseFermé">
            <div className="container">
                <h3> {title} </h3>
                <img className="FlècheHaute" src = {haut} alt = "contenu caché" onClick={() => setIsOpen (false)}/>
            </div>
            {typeof content === "object" ? affichageValeurs(content) : <p> {content} </p> }
        </div>
        ) : (
        <div className="collapseOuvert">
            <div className="container">
                <h3> {title} </h3>
                <img className="FlècheBasse" src = {bas} alt = "contenu affiché" onClick={() => setIsOpen (true)}/>
            </div>
        </div>
        )
}

function affichageValeurs (texte) {
    return (
        <ul>
            {texte.map((equipment) => (
                <li key= {equipment}> {equipment}
                </li>
            ))}
        </ul> 
    )
}


export default Collapse ;