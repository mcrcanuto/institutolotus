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

    
    <h1 id="pqp">DENÚNCIAS</h1>


    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" 
  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>




    <div className="wrap-inputpolicial">
    <input className='inputpolicial' type="name" placeholder='Pesquisar denúncia' />
    </div>
    <div id="botaopolpesquisar"><button id="botaopolpesquisar"><FiSearch/></button></div>




    <div className="rolarpolicial">

  <div className="colunapolicial" >
  <h2 className="h2policial">Denúncias Recentes</h2>
  <p className="ppolicial">
</p>
</div>


  <div className="colunapolicial" >
  <h2 className="h2policial">Denúncias Finalizadas</h2>
  <p className="ppolicial"></p>
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