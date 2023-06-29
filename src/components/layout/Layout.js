import {Banner} from "../banner/Banner";
import {Footer} from "../footer/Footer"
import {Outlet} from "react-router-dom";

export const Layout = () =>{
    return(
        <>
            <Banner />
            <Outlet />
            <Footer />
        </>
    )
}