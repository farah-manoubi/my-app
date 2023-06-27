import {Banner} from "../Banner";
import {Outlet} from "react-router-dom";

export const Layout = () =>{
    return(
        <>
            <Banner />
            <Outlet />
        </>
    )
}