import style from "./banner.module.scss"




export const Banner = (props) =>{
    return(
        <div className={style.container}>
            <div className={style.container__image}><img src={props.icon} alt="banner"/></div>
            <div className={style.container__texte}><p>{props.texte}</p></div>
        </div>
        
    )
}