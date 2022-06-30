import "./index.css"

function Button(props) {
  return (
    <div className="button">
      <button type={props.type} >{props.text}</button>
    </div>
  )
}

export default Button