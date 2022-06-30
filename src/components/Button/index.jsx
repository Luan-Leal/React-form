import "./index.css"

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};

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