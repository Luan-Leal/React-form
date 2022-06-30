import  React, { useState } from 'react'

import "./index.css"

function Checkbox(props) {
  const [terms, setTerms] = React.useState(false);



  return (
    <div className="control-group">
        <label className="control control-checkbox">
            <p>{props.label}</p>
            <input type="checkbox" 
            value={terms}
            checked={terms}
            onChange={({target}) => setTerms(target.checked)}
            />
            <div className="control_indicator"></div>
        </label>
    </div>
  )
}

export default Checkbox
