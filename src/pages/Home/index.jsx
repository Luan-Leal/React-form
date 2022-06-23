import { useState } from 'react'

import Input from "../../components/Input"

import Button from "../../components/Button"



function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <Input />
      <br />
      <Button />
    </div>
  )
}

export default Home
