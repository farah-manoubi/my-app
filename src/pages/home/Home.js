import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import {Card} from "../../components/card/Card"



export const Home = (props) =>{
    const mystyle = {
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
        borderRadius: "10px",
        gap: "70px",
        backgroundColor: "#F7F7F7",
        paddingTop: "40px",
        paddingBottom: "40px",
        fontFamily: "Montserrat"

    }

    const styleLink = {
        color: "inherit",
        fontWeight: "700",
        fontFamily: "Montserrat",
        fontSize: "16px"
        

    }

    const [ data , setData ] = useState([]); 
    const { id } = useParams();

    useEffect(() => {
        const url = "../data/jsonFile.json";
        const fetchData = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
            setData(json);   
        };
        fetchData();
    }, [id]);

    return (
        <>
        <div style ={mystyle}>{data.map(item =>
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