import React from "react";
import { Popup2 } from "../popup/zapop";
import '../../css/pop.css'
import {BsWhatsapp} from "react-icons/bs"

function Zap(){
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
  

    const togglePopup2 = () => {
      setIsOpen2(!isOpen2);
      setIsOpen(!isOpen);
    }

    return (
        <>
         <div>
                      <button onClick={togglePopup2} className="zap1"> 
                      <BsWhatsapp className="zapicone"/> Compre pelo WhatsApp
                      </button>
                 </div>

                 {isOpen && <Popup2
      handleClose={togglePopup2}
      content={<div>

        <h1 className="texto">O link a seguir é contato de telefone a seguir, é um número da Delegacia da Mulher de Volta Redonda.
         <br></br>    Use-o como emergência caso necessite de ajuda imediata.
        </h1>

      <a href="https://api.whatsapp.com/send?phone=5524998709056&text=Preciso%20da%20ajuda%20da%20pol%C3%ADcia%20nesse%20exato%20momento!">
        <button className="falar"><BsWhatsapp/> Falar com a polícia por WhatsApp</button>
        </a>
      </div>}
      />}
       
    </>
    
  );
}


      export default Zap;