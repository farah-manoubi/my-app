import { Banner } from "../../components/banner/Banner";
import aboutBanner from "../../assets/aboutBanner.png";
import{Collapse} from "../../components/collapse/Collapse";
import style from "./about.module.scss"

export const About = () =>{
    return(
        <>
         <Banner icon={aboutBanner} texte="" />
        <div className={style.container}>

            <Collapse title="Fiabilité">
                <p className={style.paragraph}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                 et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse> 
        
            <Collapse title="Respect">
                <p className={style.paragraph}>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse> 

            <Collapse title="Service">
                <p className={style.paragraph}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapse> 

            <Collapse title="Securité">
                <p className={style.paragraph}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
                cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse> 
            
        </div>
        </>
       


       
    )
}