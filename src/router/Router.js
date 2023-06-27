import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {Appartment} from "../pages/appartment/Appartment";
import { Layout } from "../components/layout/Layout";


export const Router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/appartment/",
                element: <Appartment />
            },

        ]
    },
    {
        path: "*",
        element: <div> NOT FOUND </div>
    }
])