import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className="headerContainer">
            <div><img src={logo} alt='Logo du site web'/></div>
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A propos</a></li>
                </ul>
            </nav>
        </div>
    ) 
}

export default Banner