import React from "react";
import MenuPolicial from "../components/menus/MenuPolicial"
import FooterPolicial from "../components/menus/FooterPolicial"
import "./../css/perfilpolicial.css"
import "./../css/geral.css"

function PerfilPolicial(){
return(
<>
<React.Fragment>
			<MenuPolicial/>	
      
		</React.Fragment>


      

<section className="oipolicial">
    <h1 id="pqp">DENÚNCIAS</h1>

    <div className="wrap-input">
    <input className='inputp' type="name" placeholder='Pesquisar denúncia' />
    </div>

    <div>
    <button id="filtro1" >Denúncias Recentes</button>
    <button id="filtro2" >Denúncias Finalizadas</button>
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