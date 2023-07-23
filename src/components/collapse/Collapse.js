import { useState } from "react";
import style from "./collapse.module.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Collapse = (props) =>{
    const [open, setOPen] = useState(false);
    const arrow = () =>{
        setOPen(!open)
    }

    return(
        <>
            <div className={style.titleContainer}>
                <h2>{props.title}</h2>
                <button className={style.titleContainer__arrow} onClick={arrow}><FontAwesomeIcon  icon={faAngleDown}/></button>
            </div>
            <div className={open ? style.containerDisplay : style.containerHidden}>
                <div className={style.content}> {props.children} </div>
            </div>
        </>
    )
}