
import '../../css/pop.css'
import {BsWhatsapp} from "react-icons/bs"
import "./../../css/geral.css"

import  { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';


function Zap(){
  const [swalProps, setSwalProps] = useState({});


  
    return (
        <>
           <div>
            <button id="compre" onClick={() => {
                setSwalProps({
                    show: true,
                    text: 'Atenção! O link a seguir te levará até o contato da Delegacia da Mulher de Volta Redonda. Use caso nessecite de ajuda imediata.',
                    footer: '<a href="https://api.whatsapp.com/send?1=pt_BR&phone=5524998709056">Conversar agora</a>',
                });
            }}>
                <BsWhatsapp id="compreicone"/>Compre pelo WhatsApp
            </button>
            <SweetAlert2 {...swalProps} />
        </div>

         </>

  );
}


      export default Zap;