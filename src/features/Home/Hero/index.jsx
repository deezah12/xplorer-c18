import FilledButton from "../../../component/resuables/FilledButton";
import style from "./index.module.css"
import illustration from "../../../assets/home/Illustration.svg"
const Hero = () => {
    return (
        <div className={style.mainCont}>
            <div>
                <p className={style.title}>Lessons and insights from <span style={{color: "#4caf4f", display: "block"}}>Ignoring React Class</span></p>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <FilledButton text={"Register"} textColor={"#FFF"} color={"#4caf4f"}/>
            </div>
            <div>
                <img src={illustration}/>
            </div>
        </div>
    )
}
export default Hero;