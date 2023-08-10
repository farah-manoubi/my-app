import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from "./carrousel.module.scss"

export const Carrousel = ({slides}) =>{

    const [currentIndex, setCurrentIndex] = useState(0);

    const styleSlides={
        backgroundImage: `url(${slides[currentIndex]})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "15px"
    }

    const previousSlide = () =>{
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    };

    const nextSlide = () =>{
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    
    
    return (
        <>
            <div style={{height: "100%", position: "relative"}}>
                <div className={style.chevronLeft} onClick={previousSlide}><FontAwesomeIcon icon={faChevronLeft} /></div>
                <div className={style.chevronRight} onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></div>
                <div style={styleSlides}></div>
            </div>
        </>
    )
}