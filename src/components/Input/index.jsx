import { useState } from 'react'

import "./index.css"

function Input() {
  return (
    <div className="input">
      <label htmlFor="">Label</label>
      <input type="text" placeholder='Placeholder' />
    </div>
  )
}

export default Input
