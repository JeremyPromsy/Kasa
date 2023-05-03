import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/home.css"

function Home () {
    return (
        <div className="home">
             <div>
                <Banner/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <Card/>
        </div>
    )
}

export default Home;