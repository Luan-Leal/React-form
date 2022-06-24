import "./index.css"

function Checkbox() {
  return (
    <div class="control-group">
        <label class="control control-checkbox">
            <p>Label</p>
            <input type="checkbox" />
            <div class="control_indicator"></div>
        </label>
    </div>
  )
}

export default Checkbox
