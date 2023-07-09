export const Card = ({id, picture, title}) =>{
    return(
        <div className="" id={id}>
            <img className="" src={picture} alt="Tuile"/>
            <div className=""></div>
            <span className="">{title}</span>
        </div>
        
    )
}