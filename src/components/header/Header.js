import styles from "./header.module.scss";
import logo from "../../assets/logo.png";
import { NavLink} from "react-router-dom";



export const Header = () =>{

    return (
        <div className={styles.headerContainer}>
            <div><img src={logo} alt='Logo du site web'/></div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.inactive}>Accueil</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? styles.active : styles.inactive}>A propos</NavLink></li>
                </ul>
            </nav>
        </div>
    ) 
}