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

    <p>Seu número de protocolo é:
        {protocolo}
    </p>

    <React.Fragment>
    <Footer/>
    </React.Fragment>
    

</>
       


    
)
}


export default Protocolo;