import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export const Logement = () =>{

    const [ data , setData ] = useState([]); 
    const {id} = useParams();
    

    useEffect(() => {
        const url = "../data/jsonFile.json";
        const fetchData = async () => {
            
            const response = await fetch(url);
            const json = await response.json();
            const result = json.find(item => item.id === id)
            //setData(json); 
            console.log(result) 
        };
        fetchData();
    }, [id]);
    
    return(
        <>
            
        </>
           
        
        
    )
}