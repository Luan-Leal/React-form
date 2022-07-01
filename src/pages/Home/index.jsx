import {React , useState} from "react"
import{useNavigate} from "react-router-dom"


import Input from "../../components/Input"
import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"

import "./home.css"
import Imagem from "../../assets/data.png"



const Home = () => {
  const nav = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [errorName, setErrorName] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorPhone, setErrorPhone] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
  }

  function validateName(value) {
    if (value.length === 0){
      setErrorName("Preencha um valor")
      return false
    } else if (!/^[a-zA-Z ]{4,30}$/.test(value)){
      setErrorName("123")
      return false
    } else {
      setErrorName(null);
      return true
    }
  }
  function handleBlurName({target}) {
    console.log(validateName(target.value))
  }


  function validateEmail(value) {
    if (value.length === 0){
      setErrorEmail("Preencha um valor")
      return false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
      setErrorEmail("123")
      return false
    } else {
      setErrorEmail(null);
      return true
    }
  }
  function handleBlurEmail({target}) {
    console.log(validateEmail(target.value))
  }


  function validatePassword(value) {
    if (value.length === 0){
      setErrorPassword("Preencha um valor")
      return false
    } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,9}$/.test(value)){
      setErrorPassword("123")
      return false
    } else {
      setErrorPassword(null);
      return true
    }
  }
  function handleBlurPassword({target}) {
    console.log(validatePassword(target.value))
  }

  
  function validatePhone(value) {
    const regex = (/\d{2}\d{5}-?\d{4}/)
    if (!regex){
      console.log("erro")
      return false
    } else if (! /\d{2}\d{5}-?\d{4}/.test(value)){
      setErrorPhone("123")
      return false
    } else {
      setErrorPhone(null);
      return true
      
    }
  }
  function handleBlurPhone({target}) {
    console.log(validatePhone(target.value))
  }


   const handleValidate = () => {
    if (name && email && password && phone) {
      console.log("logou")
      nav("/sucess")
    }else{
      console.log("não logou")
    } 
  }

  console.log(name, email, password, phone )
  return (
    <main>
      <section className='container'>

        <div className='HomeImage'>
          <img src={ Imagem } alt="" />
          <p>Intern Sign Up</p>
        </div>
      
        <form onSubmit={handleSubmit} className="forms">
          <div className='one-form-inline'>

            <Input label="Full Name *" 
            id="name"
            placeholder="Name" 
            name="name"
            type="text"
            value={name}
            setValue={setName}
            onBlur={handleBlurName}
            />
            {errorName && <span className='error'>Fullname Invalid</span>}
          </div>

          <div className='two-form-inline'>
            <div className='form1'>
              <Input label="Email *" 
              id="email"
              placeholder="foo@bar.com" 
              name="email"
              value={email}
              setValue={setEmail}
              onBlur={handleBlurEmail}
              />
              {errorEmail && <span className='error'>Email Invalid</span>}
            </div>

            <div className='form2'>
              <Input label="Phone" 
              id="phone"
              placeholder="(83) 00000-0000" 
              name="phone"
              value={phone}
              setValue={setPhone}
              onBlur={handleBlurPhone}
              />
              {errorPhone && <span className='error'>Phone Invalid</span>}
            </div>
          </div>

          <div className='two-form-inline'>
            <div className='form1'>
              <Input label="Password *"
              id="password" 
              placeholder="" 
              name="password"
              value={password}
              setValue={setPassword}
              onBlur={handleBlurPassword}
              />
              {errorPassword && <span className='error'>Password Invalid</span>}
            </div>

            <div className='form2'>
              <Input label="Birthday *"
              id="password" 
              placeholder="yyyy/mm/dd" 
              name="age"
              value={age}
              setValue={setAge}
              />

            </div>
          </div>

          <div className='ButtonAndCheckbox'>
            <div>
              <Checkbox label="I accept the terms and privacy"/>
            </div>
            <div className="button">
              <Button text="Register" type="text" onClick={handleValidate}/>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Home
