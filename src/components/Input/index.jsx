import React from "react";
import "./index.css"


function Input({ label, placeholder, name, value, setValue, ...props}) {

  return (
    <div className="input">
      <label>{label}</label>
      <input 
      placeholder={placeholder} 
      name={name} 
      value={value}
      onChange={({target}) => setValue(target.value)}
      {...props}
      />
    </div>
  )
}

export default Input
