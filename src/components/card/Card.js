import styles from "./card.module.scss"

export const Card = ({id, cover, title}) =>{
    return(
        <div className={styles.card} key={id}>
            <div className={styles.card__imageCard}><img src={cover} alt="card"/></div>
            <div className={styles.card__titleCard}><p>{title}</p></div>
        </div>
        
    )
}