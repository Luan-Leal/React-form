import { useState } from 'react'

import Input from "../../components/Input"





function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <Input />
      <br />

    </div>
  )
}

export default Home
