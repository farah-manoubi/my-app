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

    
    
    return (
        <>
            <div style={{height: "100%", position: "relative"}}>
                <div className={style.chevronLeft}><FontAwesomeIcon icon={faChevronLeft} /></div>
                <div className={style.chevronRight}><FontAwesomeIcon icon={faChevronRight} /></div>
                <div style={styleSlides}></div>
            </div>
        </>
    )
}