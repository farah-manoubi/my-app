import logo_white from "../../assets/logo_white.png";
import styles from "./footer.module.scss";

export const Footer = () =>{
    
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerContainer__picture}><img src={logo_white} alt="Logo du site internet"/></div>
            <div className={styles.footerContainer__copyright}><p>© 2020 Kasa. All rights reserved</p></div>
        </div>
    )
}