import React, { ChangeEvent, useEffect, useState } from "react";
import MenuPolicial from "../components/menus/MenuPolicial"
import FooterPolicial from "../components/menus/FooterPolicial";
import "./../css/atualizar.css"
import "./../css/geral.css"

import {LuSendHorizonal} from "react-icons/lu"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import decode from "../components/codigos/decoder";
import dateDisplayer from "../components/codigos/dataDisplayer";


function Atualizar(){
  const {protocolo} = useParams(); //parâmetro contento protocolo da denúncia
  const navigate = useNavigate(); // uso de navegador
  const [comentarios, setComentarios] = useState([]); // lista com os comentários registrados
  const [denuncia, setDenuncia] = useState([]); // lista com a denúncia
  const [policial, setPolicial] = useState(decode(localStorage.getItem("token"))); //policial pelo token
  const [nComentario, setNCom] = useState({ 
    Polícia_pol_cpf : "",
    Denúncia_den_protocolo : "",
    aco_status : "Denúncia Visualizada",
    aco_comentario : "",
  }); // Objeto para criação de um comentário novo

  useEffect(() => {
    if(protocolo) {
      setNCom(prev => ({...prev, Denúncia_den_protocolo : protocolo}));
      getComentarios();
      getDenuncia();
    }
  }, 
  [protocolo]);

  useEffect(() => {
    if(policial.pol_cpf) setNCom(prev => ({...prev, Polícia_pol_cpf : policial.pol_cpf}));
  }, [policial])

  async function getComentarios() {
    await axios.get(`http://localhost:3344/acompanhamento/denuncia/${protocolo}`).then((res) => {
      let sorted = res.data.sort(function(a, b) {
        return b.aco_data - a.aco_data;
    })
    setComentarios(sorted);
    }).catch((error) => {
      console.log(error);
    });
  }

  async function getDenuncia() {
    await axios.get(`http://localhost:3344/denuncia/protocolo/${protocolo}`).then((res) => {
      setDenuncia(res.data[0]); 
    }).catch((error) => {
      console.log(error);
    }); 
  }

  async function postComentario() {
    console.log(nComentario)
    await axios.post(`http://localhost:3344/acompanhamento`, {
      Polícia_pol_cpf : nComentario.Polícia_pol_cpf,
      Denúncia_den_protocolo : nComentario.Denúncia_den_protocolo,
      aco_status : nComentario.aco_status,
      aco_comentario : nComentario.aco_comentario
    }).then((res) => {
      navigate(0);
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNCom(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  const renderComentarios = comentarios.map(item => {
    return <div id="divcomentario" key={item.aco_id}>

    <p id="tipocoment">{item.aco_status}</p>
    <p id="data">{dateDisplayer(item.aco_data)}</p>
   
    <p id="coment">
      {item.aco_comentario}
    </p>
    </div>
  })


return(


<>
    <React.Fragment>
    <MenuPolicial/>
    </React.Fragment>

    <br></br>

<p id="titulo-denuncia">{denuncia.den_violencia} - {protocolo}</p>
<p id="titulo-agressor">Agressor: {denuncia.agr_nome}</p>

  <br></br><br></br>

  <p id="titulo-c-a">Comentários Antigos </p>

<div id="TelaStatus" >

  {(comentarios.length > 0) ? renderComentarios : <h1>Essa denúncia não possuí comentários</h1>}

</div>


<br></br><br></br><br></br><br></br>
<div>
<label id="label-tipo-comentario">Escolha um tipo de comentário:</label>
  <select id="select-tipo-comentario" onChange={handleChange} name="aco_status" value={nComentario.aco_status} required>
  <option value="Denúncia Visualizada">Denúncia Visualizada</option>
  <option value="Denúncia em investigação">Denúncia em investigação</option>
  <option value="Denúncia Finalizada">Denúncia Finalizada</option>
</select>

<br></br><br></br><br></br>

<div className="input-group-comentario mb-5">
    
  <textarea  className="form-comentario" placeholder="Escrever comentário" 
  aria-label="Recipient's username" aria-describedby="basic-addon2" name="aco_comentario" onChange={handleChange}/>
  <div className="input-group-append">
  <button id="botaocomentar" onClick={postComentario}><LuSendHorizonal/></button>
  </div>
  </div>
  </div>



<React.Fragment>
    <FooterPolicial/>
    </React.Fragment>
</>
        
)
}


export default Atualizar;