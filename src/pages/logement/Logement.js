import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



export const Logement = ({logement}) =>{

    const [ logements , setLogement ] = useState(0); 
    const { id } = useParams();

    useEffect(() => {
        const url = "../data/jsonFile.json";
        const fetchData = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
            console.log(json)
                
        };
        fetchData();
    }, []);

    return(
        <>
            <h1> Page qui affiche les apparts</h1>
            <p></p>
           
    
           
        </>
           
        
        
    )
}