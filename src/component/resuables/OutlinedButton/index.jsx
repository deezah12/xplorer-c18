import style from "./index.module.css"
const OutlinedButton = ({borderColor, text, textColor}) => {

    return(
        <div>
            <button style={{borderColor: borderColor, color: textColor}} className={style.outlinedBtn}>
                {text}
            </button>
        </div>
    )
}
export default OutlinedButton;