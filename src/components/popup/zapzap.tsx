import React from "react";
import { Popup2 } from "../popup/zapop";
import '../../css/pop.css'

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
                      <img src="./../imgs/zap.png"  className="zapimg" />
                      </button>
                 </div>

                 {isOpen && <Popup2
      handleClose={togglePopup2}
      content={<div>
      <a href="https://api.whatsapp.com/send?phone=5524998709056&text=Voc%C3%AA%20precisa%20de%20ajuda%20agora?%20Fale%20conosco%20pelo%20WhatsApp%20para%20chamar%20a%20pol%C3%ADcia.">
        <h3>Compre pelo WhatsApp</h3></a>
      </div>}
      />}
       
    </>
    
  );
}


      export default Zap;