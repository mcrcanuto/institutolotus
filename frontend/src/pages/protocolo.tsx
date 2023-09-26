import React, { useState } from "react";
import Footer from "../components/menus/footer";
import Menu from "../components/menus/Menu";
import Submenu from "../components/menus/submenu";
import "./../css/protocolo.css"
import decode from "../components/codigos/decoder";


function Protocolo(){
    const [protocolo, setProtocolo] = useState(localStorage.getItem("denuncia"));
return(


<>
    <React.Fragment>
    <Menu/>
    <Submenu/>
    </React.Fragment>

    <div className="Containerprotocolo">
    <div className="containerprotocolo">
    <div className="wrapprotocolo">
      <h2 className='h2prot'>O número do seu protocolo é:</h2>
      <h2 id='protocol'>{protocolo}</h2>
      <br />
      <p className='textprot'>Com ele você poderá acessar as atualizações 
        e status da sua denúncia na aba "Meus Pedidos". </p>
        <br />
      <p className='textprot'>Anote e guarde seu protocolo!</p>
      
    </div>
    </div>
    </div>

    <React.Fragment>
    <Footer/>
    </React.Fragment>
    

</>
       


    
)
}


export default Protocolo;