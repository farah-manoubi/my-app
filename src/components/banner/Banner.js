import styles from "./banner.module.scss";


export const Banner = () =>{
    return (
        <div className={styles.headerContainer}>
            <div><img src="" alt='Logo du site web'/></div>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    ) 
}