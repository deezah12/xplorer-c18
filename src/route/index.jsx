import Layout from "../component/Layout/Index";
import Home from "../features/Home";

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element:<Home/>
            }

        ]
    },
    {

    }
]
