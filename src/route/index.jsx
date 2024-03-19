import Layout from "../component/Layout/Index";
import Home from "../features/Home";
import AboutUs from "../features/AboutUs";
import Feature from "../features/Feature";

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element:<Home/>
            },
            {
                path: "/about-us",
                element:<AboutUs/>
            },
            {
                path: "/feature",
                element:<Feature/>
            }

        ]
    },
    {

    }
]
