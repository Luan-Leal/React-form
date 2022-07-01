import { Link } from 'react-router-dom';

import Imagem from "../../assets/data.png"
import Button from "../../components/Button"

import "./sucess.css"

function Sucess() {


  return (
    <main className="sucess">
      <div className="containerSucess">
        <div className="img">
          <img src={ Imagem} alt="" />
           <h1>Sucesss!</h1>
        </div>
        <div className="buttonSucess">
        <Link className='linkStyle' to="/">
          <Button text="Go Back!" />
        </Link>
        </div>
      </div>
    </main>
  )
}

export default Sucess
