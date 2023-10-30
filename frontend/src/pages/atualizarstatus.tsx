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

<div>
    <React.Fragment>
    <MenuPolicial/>
    </React.Fragment>

    <br></br>
    <br></br>


    <div className="rolarpolicial">

    <p id="titulo_denuncia">Denúncia de {denuncia.den_violencia} </p> 
    <p id="protocolo"> {protocolo}</p>

<div className="colunapolicial" >

  <h2 className="sobre">Sobre a ocorrência</h2>
  <div className="rowcomentario">
  <div className="wrap-comentario-esquerda">
   

<p id="informacoes_denuncia">Tipo de Violência: {denuncia.den_violencia}</p>
<p id="informacoes_denuncia">Protocolo da denúncia: {protocolo}</p>
<p id="informacoes_denuncia">Tipo de denunciante: {denuncia.den_denunciante}</p>
<p id="informacoes_denuncia">Frequência do ocorrido: {denuncia.den_frequencia}</p>
<p id="informacoes_denuncia">Data da ocorrência: {denuncia.den_data_ocorrencia}</p>
<p id="informacoes_denuncia">Horário da ocorrência: {denuncia.den_hora_ocorrencia}</p>
<p id="informacoes_denuncia">Descrição do ocorrido: {denuncia.den_desc_ocorrido}</p>
<p id="informacoes_denuncia">Bairro: {denuncia.den_bairro}</p>
<p id="informacoes_denuncia">Cep: {denuncia.den_cep}</p>
<p id="informacoes_denuncia">Descrição do local: {denuncia.den_desc_local}</p>
<p id="informacoes_denuncia">Ponto de referência: {denuncia.den_ponto_ref}</p>

<br></br>

<span className="focus-input"></span>
</div>
  </div>
</div>



<div className="colunapolicial" >
  <h2 className="sobre">Sobre o agressor</h2>
  <div className="rowcomentario">
  <div className="wrap-comentario-direita">
 

<p id="informacoes_denuncia">Nome: {denuncia.agr_nome}</p>
<p id="informacoes_denuncia">Apelido: {denuncia.agr_apelido}</p>
<p id="informacoes_denuncia">Idade: {denuncia.agr_idade}</p>
<p id="informacoes_denuncia">Estatura: {denuncia.agr_estatura}</p>
<p id="informacoes_denuncia">Tipo físico: {denuncia.agr_tipo_fisico}</p>
<p id="informacoes_denuncia">Cor da pele: {denuncia.agr_cor_pele}</p>
<p id="informacoes_denuncia">Cor do cabelo: {denuncia.agr_cor_cabelo}</p>
<p id="informacoes_denuncia">Tipo do cabelo: {denuncia.agr_tipo_cabelo}</p>
<p id="informacoes_denuncia">Cor dos olhos: {denuncia.agr_cor_olhos}</p>
<p id="informacoes_denuncia">O agressor mora na mesma residência que a vítima: {denuncia.agr_mesma_residencia}</p>
<p id="informacoes_denuncia">Endereço do agressor: {denuncia.agr_endereco} </p>
<p id="informacoes_denuncia">Ponto de referência da residência do agressor: {denuncia.agr_pont_ref_end} </p>
<p id="informacoes_denuncia">Local de trabalho do agressor : {denuncia.agr_local_trab}</p>
<p id="informacoes_denuncia">O agressor tem algum relacionamento com a vítima: {denuncia.agr_possuiu_relacionamento} </p>

<br></br>

<span className="focus-input"></span>
</div>
  </div>
</div>


</div>

   
<br></br><br></br><br></br><br></br><br></br><br></br>



  <p id="titulo-c-a">Comentários Antigos </p>

<div id="TelaStatus" >

  {(comentarios.length > 0) ? renderComentarios : <h1 id="naoexiste">Essa denúncia não possuí comentários</h1>}

</div>


<br></br><br></br>
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
<div/>
</div>
        
)
}


export default Atualizar;