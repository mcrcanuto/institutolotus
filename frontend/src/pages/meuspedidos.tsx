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


    <div className="Container">
    <div className="container-login">
    <div className="wrap-login">
      <h3>Insira aqui o protocolo da sua denúncia</h3>
      <input type="text" />
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