import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {Card} from "../../components/card/Card";
import{Banner} from "../../components/banner/Banner";
import style from "./home.module.scss";
import banner from "../../assets/banner.png"



export const Home = (props) =>{

    const styleLink = {
        color: "inherit",
        fontWeight: "700",
        fontFamily: "Montserrat",
        fontSize: "16px"
        

    }

    const [ data , setData ] = useState([]); 
    

    useEffect(() => {
        const url = "../data/jsonFile.json";
        const fetchData = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
            setData(json);   
        };
        fetchData();
    }, []);

    return (
        <>
        <Banner icon={banner} texte="Chez vous, partout et ailleurs"/>
        <div className ={style.mystyle}>{data.map(item =>
            <Link to={`/logement/${item.id}`} key={item.id} style ={styleLink}>
                <Card 
                    key={item.id}
                    cover={item.cover}
                    title={item.title}/>
            </Link>)}
        </div>
       
        </>
        
    )
}