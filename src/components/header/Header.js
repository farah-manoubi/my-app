import styles from "./header.module.scss";
import logo from "../../assets/logo.png";
import { Link} from "react-router-dom";


export const Header = () =>{
    
    return (
        <div className={styles.headerContainer}>
            <div><img src={logo} alt='Logo du site web'/></div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </div>
    ) 
}