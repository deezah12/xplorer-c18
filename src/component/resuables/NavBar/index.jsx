import style from "./index.module.css"
import logo from "../../../assets/home/Logo (2).svg"
import OutlinedButton from "../OutlinedButton";
import FilledButton from "../FilledButton";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.mainCont}>
            <img src={logo} alt={""}/>
            <div className={style.linkCont}>
                <Link to={"/"}>
                <p>Home</p>
                </Link>
                <Link to={"/about-us"} style={{textDecoration: "none"}}>
                <p>AboutUs</p>
                </Link>
                <Link to={"/feature"}>
                <p>Feature</p>
                </Link>
                <p>Product</p>
                <p>Testimonial</p>
                <p>Faq</p>
            </div>

            <div className={style.thirdSection}>
                <OutlinedButton text="Login" textColor="#4caf4f" borderColor="#4caf4f"/>
                <FilledButton text="SignUp" textColor="#fff" color="#4caf4f"/>
            </div>
        </div>
    );
};
export default Navbar;