import React from "react";
import Footer from "../components/menus/footer";
import Menu from "../components/menus/Menu";
import Submenu from "../components/menus/submenu";
import "./../css/status.css"


function Status(){
return(


<>
    <React.Fragment>
    <Menu/>
    <Submenu/>
    </React.Fragment>


    <div className="Containeracompanhamento">
    <div className="containeracompanhamento">
    <div className="wrapacompanhamento">
      <h2 className='h2acompanhamento'>Denúncia: XXXXXXXXXX</h2>
      <h2 id='statusacompa'>status: Vizualisada</h2>
      <br />
      <ol className="progress" data-steps="4">
  <li className="done">
    <span className="name">Enviada</span>
    <span className="step"><span>1</span></span>
  </li>
  <li className="done">
    <span className="name">Vizualisada</span>
    <span className="step"><span>2</span></span>
  </li>
  <li className="active">
    <span className="name">Finalizada</span>
    <span className="step"><span>3</span></span>
  </li>
</ol>
<br /><br /><br /><br />
    <div className='comente'>
      <fieldset>
        ola eu sou a porra da giovana <br />
        jsuxhua <br />
        cbwkjhn
      </fieldset>
    </div>
      
    </div>
    </div>
    </div>

   <React.Fragment>
    <Footer/>
    </React.Fragment>

</>
       


    
)
}


export default Status;