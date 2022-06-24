import { useState } from 'react'

import Input from "../../components/Input"
import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"

import "./index.css"
import Imagem from "../../assets/data.png"


function Home() {
  const [count, setCount] = useState(0)

  return (
    <main >
      <section className='container'>

        <div className='HomeImage'>
          <img src={ Imagem } alt="" />
          <p>Intern Sign Up</p>
        </div>
      
        <div className="forms">
          <div className='one-form-inline'>
            <Input />
          </div>

          <div className='two-form-inline'>
            <div className='form1'>
              <Input />
            </div>

            <div className='form2'>
              <Input />
            </div>
          </div>

          <div className='two-form-inline'>
            <div className='form1'>
              <Input />
            </div>

            <div className='form2'>
              <Input />
            </div>
          </div>

          <div className='ButtonAndCheckbox'>
            <Checkbox />
            <Button />
          </div>

        </div>

      </section>

    </main>
  )
}

export default Home
