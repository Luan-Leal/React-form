import "./index.css"

function Checkbox(props) {
  return (
    <div className="control-group">
        <label className="control control-checkbox">
            <p>{props.label}</p>
            <input type="checkbox" />
            <div className="control_indicator"></div>
        </label>
    </div>
  )
}

export default Checkbox
