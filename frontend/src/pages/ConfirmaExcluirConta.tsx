import { Link, useNavigate } from "react-router-dom"

import axios from "axios";
import { useState } from "react";
import decode from "../components/codigos/decoder";

import "./../css/geral.css"

function ConfirmaExcluirConta(){
  const navigate = useNavigate();
const [policial] = useState(decode(localStorage.getItem("token")));
async function apagarPolicial() {
      await axios.delete(`http://localhost:3344/policial/${policial.pol_cpf}`, {headers : {
        Authorization : "Bearer " + localStorage.getItem("token")
      }}).then((res) => {
        alert("Conta excluída com sucesso!")
        navigate("/");
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
        <p id="voltarfeedback"> ❮ Voltar</p>
   </Link>

        <div className="login-form">
<br></br>
        <span id="querexcluir">Quer mesmo excluir sua conta?</span>
        <span className="login-form-title"></span>
        
        <div className="container-login-form-btn">
      <button id="botaosim" onClick={apagarPolicial}  >Sim</button>
     </div>
        
        </div>
        </div>
        </div>
        </div>

</>
       


    
)
}


export default ConfirmaExcluirConta;