import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./logement.module.scss";
import { Carrousel } from "../../components/carrousel/Carrousel";



export const Logement = () =>{

    const [ data , setData ] = useState(null); 
    const nav = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        const url = "../data/jsonFile.json";
        const fetchData = async () => {
            
            const response = await fetch(url);
            const json = await response.json();
            const result = json.find(item => item.id === id);
            console.log(result);
            if(!result){
                nav("/");
            }
            setData(result);
            
        };
        fetchData();
    }, [id, nav]);

    return(
        <>
        {
            data && (
            <>
                <div className={style.containerCarrousel}>
                    <Carrousel slides={data.pictures}/>
                </div>
                <div className={style.containerDescription}>
                    <div className={style.info}>
                        <p className={style.title}>{data.title}</p>
                        <p>{data.location}</p>
                    </div>
                    <div className={style.profile}>
                        <p>{data.host.name}</p>
                        <img src={data.host.picture} alt="profil"/>
                    </div>
                </div>  
            </>
            )
        }
        </>
        
           
        
        
    )
}