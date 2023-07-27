import { Link } from "react-router-dom";
import style from "./errorPage.module.scss";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer"

export const ErrorPage = () =>{
    return(
        <>
            <Header />
            <div className={style.containerError}>
                <p id={style.number}>404</p>
                <div id={style.paragraphError}><p>Oups! La page que vous avez demandé n'existe pas.</p></div>
            </div>
            <div className={style.link}><Link to ="/">Retourner à la page d'accueil</Link></div>
            <Footer />
        </>
    )
}