import BannerApropos from "../assets/BackgroundApropos.png";
import "../styles/banner.css"

function BannerAProposFunc() {
    return (
        <div className="banner">
                <img className="bannerImage" src= {BannerApropos} alt ="bannerApropos" /> 
        </div>
    )
}

export default BannerAProposFunc;