import img1 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0019.jpg"
import img2 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0020.jpg"
import img3 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0021.jpg"
import img4 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0022.jpg"
import img5 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0023.jpg"
import img6 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0024.jpg"
import img7 from "../../../assets/home/icons/Camera Roll/IMG-20240319-WA0025.jpg"
import {Content} from "./data";
import style from "./index.module.css"
const Client = () => {
    return (
        <div className={style.mainCont}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
                <h3 style={{marginBottom: "0"}}>Our Clients</h3>
                <p>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <img src={img1}/>
                    <img  src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                    <img src={img6}/>
                    <img src={img7}/>
                </div>
            </div>
            <div style={{display: "flex", alignItems:"center", textAlign: "center", flexDirection: "column"}}>
                <h3>Manage your entire community in a single system</h3>
                <p>Who is Nextcent suitable for?</p>
                <div style={{display: "flex"}}>
                    {
                         Content.map((items, index) => {
                            return (
                                <div key={index}>
                                <img src={items.image} alt={""}/>
                                <h3>{items.title}</h3>
                                <p>{items.text}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Client;