import {Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/Io"

function ConfirmaSaida(){
return(


<>

<div className="Container">
            
   

        <div className="container-login">
  
        <div className="wrap-login">
            
        <Link to="/perfilpolicial">
   <IoIosArrowBack className="back"/>
   </Link>

        <form className="login-form">

        <span className="login-form-title2">Quer mesmo sair?</span>
        <span className="login-form-title"></span>
        
        <div className="container-login-form-btn">
      <button className="login-form-btn3">Sim</button>
     </div>
        
        </form>
        </div>
        </div>
        </div>

</>
       


    
)
}


export default ConfirmaSaida;