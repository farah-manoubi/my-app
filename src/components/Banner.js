import '../styles/Banner.css'
import logo from '../assets/logo.png'

export const Banner = () =>{
    return (
        <div className="headerContainer">
            <div><img src={logo} alt='Logo du site web'/></div>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    ) 
}