import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/home.css"

function Home () {
    return (
        <div className="home">
            <Banner/>
            <Card/>
        </div>
    )
}

export default Home;