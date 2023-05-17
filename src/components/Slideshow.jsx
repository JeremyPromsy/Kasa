import React, {useState} from "react";
import flecheDroite from "../assets/FlècheDroite.png";
import flecheGauche from "../assets/FlècheGauche.png";
import "../styles/slideshow.css"

function Slideshow({ pictures }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
        <section id="gallery"> 
            {pictures.length > 1 && (
                <img src={flecheDroite} alt="right arrow" className="arrow-right" onClick={nextSlide}/>
            )}
            {pictures.length > 1 && (
                <img src={flecheGauche} alt="left arrow" className="arrow-left" onClick={prevSlide}
                />
            )}

            {pictures.map((img, index) => {
                return (
                    <div key={index}> {index === current && (
                            <img src={img} alt="Photos du logement" className="gallery-image"/>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Slideshow;
