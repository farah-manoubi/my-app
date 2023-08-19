import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export const Rating = (props) =>{
    const fullStars = Array(5).fill(<FontAwesomeIcon icon={faStar} style={{color: "#FF6060"}}/>);
    const emptyStars = Array(5).fill(<FontAwesomeIcon icon={faStar} style={{color: "#E3E3E3"}}/>);
    
    return(
        <>
            {fullStars.slice(5 - props.rate).map((fullStar, index) => {
                return <span key={index} style={{paddingRight: "5px", fontSize: "1.2em"}}>{fullStar}</span>
            })}

            {emptyStars.slice(props.rate).map((emptyStar, index) => {
                return <span  key={index} style={{paddingRight: "5px", fontSize: "1.2em"}}>{emptyStar}</span>
            })}
        </>

        

    )
}