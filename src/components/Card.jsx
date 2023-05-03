import React from "react";
import { Link } from "react-router-dom";
import Annonces from "../annonces/annonces.json"
import "../styles/card.css"

function Card () {
    return (
        <div className="annonces">
            {Annonces.map ((element) => (
                <Link to = { `logement/${element.id}`} 
                    key = {element.id} 
                    className="card"
                >
                    <img src = { element.cover } alt = { element.title } />
                    <p> { element.title }</p>
                </Link>
            ))}
        </div> 
    )
}

export default Card;