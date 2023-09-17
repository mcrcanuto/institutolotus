
import '../../css/pop.css'
import {BsWhatsapp} from "react-icons/bs"
import {TiInfoOutline} from "react-icons/ti"
import "./../../css/geral.css"

import  { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

function Zap(){
  const [swalProps, setSwalProps] = useState({});


  
    return (
        <>
   
   <Fab icon={<BsWhatsapp id="compreicone"/>} mainButtonStyles={{backgroundColor: 'rgb(44, 141, 44)'}} >
   <Action style={{backgroundColor: 'rgb(44, 141, 44)'}} onClick={() => {  setSwalProps({
                    show: true,
                    text: 'Atenção! O link abaixo o direcionará para o contato da Delegacia da Mulher de Volta Redonda. Utilize-o caso precise de ajuda imediatamente.',
                    footer: ' <a href="https://api.whatsapp.com/send?phone=5524998709056&text=Preciso%20da%20ajuda%20da%20pol%C3%ADcia%20nesse%20exato%20momento!">Conversar agora</a>',
                });
            }}>
      <TiInfoOutline id="compreicone"/>
    </Action>
    <SweetAlert2 {...swalProps} />
</Fab>



         </>

  );
}


      export default Zap;