import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {Logement} from "../pages/logement/Logement";
import {About} from "../pages/a_propos/About";
import { ErrorPage } from "../pages/not_found/ErrorPage";
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
                path: "/logement/:id",
                element: <Logement />
            },
            {
                path: "/about/",
                element: <About />
            },

        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])