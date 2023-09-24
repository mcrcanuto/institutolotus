import React, { ChangeEvent, useEffect, useState } from "react";
import MenuPolicial from "../components/menus/MenuPolicial"
import FooterPolicial from "../components/menus/FooterPolicial"
import "./../css/perfilpolicial.css"
import "./../css/geral.css"
import {FiSearch} from "react-icons/fi"
import {Link} from "react-router-dom"
import decode from "../components/codigos/decoder";
import axios from "axios";



function PerfilPolicial(){
  const [policial, setPolicial] = useState(decode(localStorage.getItem("token")));
  const [denuncias, setDenuncias] = useState([]); //lista com as denúncias
  const [denunciasAbertas, setAbertas] = useState([]);
  const [denunciasFinalizadas, setFinalizadas] = useState([]);
  const [once, setOnce] = useState(false);
  const [pesquisa, setPesquisa] = useState<string>();

  async function getDenuncias() {
    await axios.get(`http://localhost:3344/denuncia`).then((res) => {
      setDenuncias(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getDenuncias();
  }, []);

  useEffect(() => {
    if (denuncias.length > 0 && !once) {
      for (const denun of denuncias) {
        if (denun.den_status == "Aberta") {
          setAbertas(prev => ([...prev, denun]));
        }
        else {
          setFinalizadas(prev => ([...prev, denun]));
        }
      }
      setOnce(true);
    }
  }, [denuncias])

  const renderDenunciasAbertas = denunciasAbertas.map(item => {
    if (item.den_protocolo.match(pesquisa) || pesquisa == "") {
      return <div className="den-andamento" key={item.den_protocolo}>
        <p className="agressao-andamento">{item.den_violencia}</p>
        <p className="autor-andamento">Agressor: {item.agr_nome}/ protocolo: {item.den_protocolo}</p>
      
        <Link to={`/atualizarstatus/${item.den_protocolo}`}>
        <button className="visualizar"> Visualizar Status</button>
        </Link>
        <br></br>
    </div>
    }
    else {
      return <div key={item.den_protocolo}></div>
    }
  })

  const renderDenunciasFinalizadas = denunciasFinalizadas.map(item => {
    if (item.den_protocolo.match(pesquisa) || pesquisa == "") {
      return <div className="den-finalizada" key={item.den_protocolo}>
        <p className="agressao-finalizada">{item.den_violencia}</p>
        <p className="autor-finalizada">Agressor: {item.agr_nome}/ protocolo: {item.den_protocolo}</p>
      
        <Link to={`/atualizarstatus/${item.den_protocolo}`}>
        <button className="visualizar"> Visualizar Status</button>
        </Link>
        <br></br>
    </div>
    }
    else {
      return <div key={item.den_protocolo}></div>
    }
  })

  const handlePesquisa = (e:ChangeEvent<HTMLInputElement>) => {
    setPesquisa(e.target.value)
  }

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
  <input type="text" className="form-control" placeholder="Pesquisar uma denúncia por protocolo" 
  aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handlePesquisa}/>
  <div className="input-group-append">
  <button id="botaopolpesquisar"><FiSearch/></button>
  </div>
  </div>



    <div className="rolarpolicial">

  <div className="colunapolicial" >
  <h2 className="andamento">DENÚNCIAS EM ANDAMENTO</h2>
  {(denunciasAbertas.length > 0) ? renderDenunciasAbertas : <h3>Não existem denúncias Abertas</h3>}
  
</div>


<div className="colunapolicial" >
<h2 className="finalizada">DENÚNCIAS FINALIZADAS</h2>
  {(denunciasFinalizadas.length > 0) ? renderDenunciasFinalizadas : <h3>Não existem denúncias Finalizadas</h3>}

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