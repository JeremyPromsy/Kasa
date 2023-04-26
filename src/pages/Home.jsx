import React from "react";
import Banner from "../components/Banner";
import bannerHome from "../assets/BackgroundAccueil.png";
import "../styles/home.css"

function Home () {
    return (
        <div className="home">
            <Banner
            imageHome = {bannerHome}
            />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Home;