import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import bannerHome from "../assets/BackgroundAccueil.png";
import "../styles/home.css"

function Home () {
    return (
        <div className="home">
            <Nav
            imageHome = {bannerHome}
            />
            <h1>Chez vous, partout et ailleurs</h1>
            <Card />
        </div>
    )
}

export default Home;