import style from "./banner.module.scss"
import banner from "../../assets/banner.png";



export const Banner = () =>{
    return(
        <div className={style.container}>
            <div className={style.container__image}><img src={banner} alt="banner"/></div>
            <div className={style.container__texte}><p>Chez vous, partout et ailleurs</p></div>
        </div>
        
    )
}