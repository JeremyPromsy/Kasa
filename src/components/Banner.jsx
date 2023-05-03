import "../styles/banner.css"
import bannerHome from "../assets/BackgroundAccueil.png";

function Banner() {
    return (
        <div className="banner">
                <img className="bannerImage" src= {bannerHome} alt ="bannerHome" /> 
                <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;