import React, {useEffect} from "react";
import { useNavigate, useParams} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Description from "../components/Description";
import Annonces from "../annonces/annonces.json";
import "../styles/logement.css"
import "../styles/collapse.css"

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate ();
    const appartements = Annonces.filter (function (logement) {
        return logement.id === id;
    })

    useEffect (() => {
        if (appartements.length === 0) {
            navigate ("*")
        }
    },);

    return (
        <div className="logement">
            {appartements.map(
        ({id, title, pictures, description, host, rating, location, equipments, tags,
        }) => (
            <div key={`description-${id}`}>
                <Slideshow pictures={pictures} />
                <Description
                    description={description}
                    equipments={equipments}
                    host={host}
                    id={id}
                    location={location}
                    rating={rating}
                    tags={tags}
                    title={title}
                />
            </div>
            )
        )}
        </div>
    )
}

export default Logement;
