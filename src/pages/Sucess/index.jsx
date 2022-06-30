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
        <div >
          <Button className="buttonSucess" text="Go Back!" link="/" />
        </div>
      </div>
    </main>
  )
}

export default Sucess
