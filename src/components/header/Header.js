import styles from "./header.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


export const Header = () =>{
    const mystyle = {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "24px",
        color: "#FF6060",
        textDecoration: "none"
      };
      
    return (
        <div className={styles.headerContainer}>
            <div><img src={logo} alt='Logo du site web'/></div>
            <nav>
                <ul>
                    <li><Link to="/" style={mystyle}>Accueil</Link></li>
                    <li><Link to="/about" style={mystyle}>A propos</Link></li>
                </ul>
            </nav>
        </div>
    ) 
}