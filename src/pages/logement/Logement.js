import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import jsonFile from "../../data/jsonFile.json"



export const Logement = ({logement}) =>{

    const [ logementt , setLogement ] = useState(); 
    const { id } = useParams();

    useEffect(() => {
        const url = "../../data/jsonFile.json";
        const fetchData = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
            const test = json.filter(item => item.id);
            console.log(test)
            return test;
            
                
        };
        fetchData();
    }, [id]);

    return(
        <>
            <h1> Page qui affiche les apparts</h1>
            {jsonFile.map(item => <Link to={`/logement/${item.id}`}>{item.title}</Link>)};
            
           
    
           
        </>
           
        
        
    )
}