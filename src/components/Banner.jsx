import "../styles/banner.css"
import bannerHome from "../assets/BackgroundAccueil.png";

function Banner() {
    return (
        <div className="banner">
                <img className="bannerHome" src= {bannerHome} alt ="bannerHome" /> 
        </div>
    )
}

export default Banner;