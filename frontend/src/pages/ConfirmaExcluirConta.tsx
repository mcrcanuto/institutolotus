import {Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/Io"
import axios from "axios";
import { useState } from "react";
import decode from "../components/codigos/decoder";

function ConfirmaExcluirConta(){

const [policial] = useState(decode(localStorage.getItem("token")));
async function apagarPolicial() {
      await axios.delete(`http://localhost:3344/policial/${policial.pol_cpf}`, {headers : {
        Authorization : "Bearer " + localStorage.getItem("token")
      }}).then((res) => {
        alert(res.data.msg);
      }).catch((error) => {
        console.log(error);
      })
}

return(


<>

<div className="Container">
            
   

        <div className="container-login">
  
        <div className="wrap-login">
            
        <Link to="/perfilpolicial">
   <IoIosArrowBack className="back"/>
   </Link>

        <div className="login-form">

        <span className="login-form-title2">Quer mesmo excluir sua conta</span>
        <span className="login-form-title"></span>
        
        <div className="container-login-form-btn">
      <button className="login-form-btn3" onClick={apagarPolicial}>Sim</button>
     </div>
        
        </div>
        </div>
        </div>
        </div>

</>
       


    
)
}


export default ConfirmaExcluirConta;