import React from "react";
import Footer from "../components/menus/footer";
import Menu from "../components/menus/Menu";
import Submenu from "../components/menus/submenu";
import "./../css/meuspedidos.css"


function MeusPedidos(){

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
      <input type="text" id='textmp' />
      <br />
      <button className="botaomp">PROCURAR</button>
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