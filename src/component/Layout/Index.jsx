import Navbar from "../resuables/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "../resuables/Footer";
const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );

}
export default Layout;
