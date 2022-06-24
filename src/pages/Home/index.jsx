import { useState } from 'react'

import Input from "../../components/Input"
import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"


function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <Input />
      <br />
      <Button />
      <br />
      <Checkbox />
    </div>
  )
}

export default Home
