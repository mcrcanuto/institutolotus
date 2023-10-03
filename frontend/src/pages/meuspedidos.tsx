import React, { ChangeEvent, useState } from "react";
import Footer from "../components/menus/footer";
import Menu from "../components/menus/Menu";
import Submenu from "../components/menus/submenu";
import "./../css/meuspedidos.css"
import { useNavigate } from "react-router-dom";


function MeusPedidos(){
    const navigate = useNavigate();

    const [protocolo, setProtocolo] = useState("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setProtocolo(e.target.value);
    }

return(


<>
    <React.Fragment>
    <Menu/>
    <Submenu/>
    </React.Fragment>


    <div className="coringa">
    <div className="containermeuspedidos">
    <div className="wrapmeuspedidos">
      <h3 className="h3mp">Insira aqui o protocolo da sua denúncia para conferir as atualizações</h3>
      <input type="text" id='textmp' onChange={handleChange}/>
      <br />
      <button className="botaomp" onClick={() => {navigate(`/meustatus/${protocolo}`)}}>PROCURAR</button>
    </div>
    </div>
    </div>
   
    <React.Fragment>
    <Footer/>
    </React.Fragment>

    

</>
       


    
)
}


export default MeusPedidos;