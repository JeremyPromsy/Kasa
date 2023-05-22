import etoileRouge from "../assets/EtoileRouge.png";
import etoileBlanche from "../assets/EtoileGrise.png";
import annonces from "../annonces/annonces.json"
import { useParams, Navigate } from "react-router-dom";
import "../styles/rate.css"

function Rate () {
    const urlParams = useParams();
    const etoileClassment = annonces.filter((data) => data.id === urlParams.id);
    if (etoileClassment === []) {
        return <Navigate to="*" />;
    }
    const etoiles = [1, 2, 3, 4, 5];

    return (
        <div className="etoiles">
        {etoileClassment.map((etoile, index) =>
            etoiles.map((etoiles) =>
                etoile.rating <= etoiles - 1 ? (
                    <img src={etoileBlanche} alt="etoile-blanche" key={`${index}-${etoiles}`} className="etoile"/>
                    ) : (
                    <img src={etoileRouge} alt="etoile-rouge" key={`${index}-${etoiles}`} className="etoile"/>
                )
            )
        )}
        </div>
    )
}

export default Rate;