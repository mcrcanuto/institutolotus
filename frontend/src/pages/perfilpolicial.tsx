import React from "react";
import MenuPolicial from "../components/menus/MenuPolicial"
import FooterPolicial from "../components/menus/FooterPolicial"
import "./../css/perfilpolicial.css"
import "./../css/geral.css"
import {FiSearch} from "react-icons/fi"


function PerfilPolicial(){
return(
<>

<React.Fragment>
			<MenuPolicial/>	
      
		</React.Fragment>

<section className="oipolicial">

    
    <h1 id="pqp">Página do Policial </h1>


    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Pesquisar uma denúncia" 
  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
  <button id="botaopolpesquisar"><FiSearch/></button>
  </div>
  </div>



    <div className="rolarpolicial">

  <div className="colunapolicial" >
  <h2 className="h2andamento">DENÚNCIAS EM ANDAMENTO</h2>
  <p className="panadamento">
</p>
</div>



<div className="colunapolicial" >
<h2 className="h2finalizadas">DENÚNCIAS FINALIZADAS</h2>
<p className="pfinalizadas">
</p>
</div>

</div>
         <br></br><br></br><br></br><br></br>



         </section>

  

    <React.Fragment>
            <FooterPolicial/>
		</React.Fragment>

   

        </>
    
)
}


export default PerfilPolicial;