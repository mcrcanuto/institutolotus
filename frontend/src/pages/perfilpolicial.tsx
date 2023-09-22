import React, { useState } from "react";
import MenuPolicial from "../components/menus/MenuPolicial"
import FooterPolicial from "../components/menus/FooterPolicial"
import "./../css/perfilpolicial.css"
import "./../css/geral.css"
import {FiSearch} from "react-icons/fi"
import {Link} from "react-router-dom"
import decode from "../components/codigos/decoder";



function PerfilPolicial(){
  const [policial, setPolicial] = useState(decode(localStorage.getItem("token")));

return(
<>

<React.Fragment>
			<MenuPolicial/>	
      
		</React.Fragment>


<br></br><br></br>
    <div className="usuario">
  <p id="conectado">Conectado(a) como {policial.nome}</p>
</div>
<br></br>


<section className="oipolicial">

    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Pesquisar uma denúncia" 
  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
  <button id="botaopolpesquisar"><FiSearch/></button>
  </div>
  </div>



    <div className="rolarpolicial">

  <div className="colunapolicial" >
  <h2 className="andamento">DENÚNCIAS EM ANDAMENTO</h2>

  <div className="den-andamento">
  <p className="agressao-andamento">Agressão </p>
  <p className="autor-andamento">Agressor:</p>

  <Link to="/atualizarstatus">
  <button className="visualizar"> Visualizar Status</button>
  </Link>
  <br></br>
</div>
</div>


<div className="colunapolicial" >
<h2 className="finalizada">DENÚNCIAS FINALIZADAS</h2>

<div className="den-finalizada">
<p className="agressao-finalizada">Agressão</p>
<p className="autor-finalizada">Agressor:</p>

<Link to="/atualizarstatus">
<button className="visualizar"> Visualizar Status</button>
</Link>
<br></br>
</div>
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