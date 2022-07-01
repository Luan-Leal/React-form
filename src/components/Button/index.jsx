import "./index.css"
import style from "styled-components"


function Button(props) {
  return (
    <div className={props.className}>
      <button type={props.type} onClick={props.onClick} >
      {props.text}
      </button>
    </div>
  )
}

export default Button