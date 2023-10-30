import { ChangeEvent, useEffect, useState } from 'react'
import './../css/denuncia.css'
import axios from 'axios';
import React from "react";
import Zap from "../components/popup/zapzap";
import Menu from "./../components/menus/Menu"
import Submenu from "./../components/menus/submenu"
import Footer from "./../components/menus/footer"
import {  useNavigate } from "react-router-dom"

function Denuncia() {
  const navigate = useNavigate();
  const [denunciaInfo, setDenuncia] = useState({ //atributos da denúncia
    den_denunciante: "",
    den_violencia: "",
    den_desc_local: "",
    den_imagem: "",
    den_cep: "",
    den_ponto_ref: "",
    den_bairro: "",
    den_frequencia: "",
    den_hora_ocorrencia: "",
    den_data_ocorrencia: "",
    den_desc_ocorrido:"",
  });
  const [keys, setkeys] = useState({ //chaves para criação da tabela de relacionamento
    fazerRelacionamento: false,
    protocoloDenuncia: "",
    idAgressor: ""
  })
  const [agressorInfo, setAgressor] = useState({ //atributos do agressor
    agr_carac_espec: "",
    agr_cor_cabelo: "",
    agr_cor_olhos: "",
    agr_cor_pele: "",
    agr_endereco: "",
    agr_estatura: "",
    agr_idade: "",
    agr_nome: "",
    agr_possibili_fuga: "",
    agr_possui_relacionamento:"",
    agr_sexo: "",
    agr_tipo_fisico: "",
    agr_tipo_cabelo: "",
    agr_apelido:"",
    agr_mesma_residencia:"",
    agr_pont_ref_end:"",
    agr_local_trabalho:"",
   
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { //evento de mudança para informações de denúncia
    setDenuncia(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleChangeAgr = (e: ChangeEvent<HTMLInputElement>) => { //evento de mudança para informações de agressor
    setAgressor(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setDenuncia(prev => ({ ...prev, den_imagem: e.target.files[0] }));
  }

  function clear() { //limpa as informações
    setDenuncia({ //da denúncia
      den_denunciante: "",
    den_violencia: "",
    den_desc_local: "",
    den_imagem: "",
    den_cep: "",
    den_ponto_ref: "",
    den_bairro: "",
    den_frequencia: "",
    den_hora_ocorrencia: "",
    den_data_ocorrencia: "",
    den_desc_ocorrido:"",
    })
    setAgressor({ //do agressor
      agr_carac_espec: "",
      agr_cor_cabelo: "",
      agr_cor_olhos: "",
      agr_cor_pele: "",
      agr_endereco: "",
      agr_estatura: "",
      agr_idade: "",
      agr_nome: "",
      agr_possibili_fuga: "",
      agr_possui_relacionamento:"",
      agr_sexo: "",
      agr_tipo_fisico: "",
      agr_tipo_cabelo: "",
      agr_apelido:"",
      agr_mesma_residencia:"",
      agr_pont_ref_end:"",
      agr_local_trabalho:"",
    })
  }

  function denunciarOprt() {
    postDenuncia();
  }

  async function postDenuncia() {
    await axios.post(`http://localhost:3344/denuncia`, { //criar denúncia
      den_denunciante: denunciaInfo.den_denunciante,
      den_violencia: denunciaInfo.den_violencia,
      den_desc_local: denunciaInfo.den_desc_local,
      den_imagem: denunciaInfo.den_imagem,
      den_cep: denunciaInfo.den_cep,
      den_ponto_ref: denunciaInfo.den_ponto_ref,
      den_bairro: denunciaInfo.den_bairro,
      den_frequencia: denunciaInfo.den_frequencia,
      den_hora_ocorrencia: denunciaInfo.den_hora_ocorrencia,
      den_data_ocorrencia: denunciaInfo.den_data_ocorrencia,
      den_desc_ocorrido: denunciaInfo.den_desc_ocorrido,
    }).then((res) => {
      localStorage.setItem("denuncia", res.data.protocolo); //Guardar protocolo denúncia no localStorage
      //navega para outra página
      setkeys(prev => ({ ...prev, protocoloDenuncia: res.data.protocolo, fazerRelacionamento: true }));
    }).catch((error) => {
      console.log(error);
    })
  }

  async function postAgressor() {
    await axios.post(`http://localhost:3344/agressor`, { //criar agressors
      agr_endereco: agressorInfo.agr_endereco,
      agr_idade: agressorInfo.agr_idade,
      agr_nome: agressorInfo.agr_nome,
      Denuncia_den_protocolo: localStorage.getItem("denuncia")
    }).then((res) => {
      alert("Denúncia criada")
      navigate("/protocolo");
    }).catch((error) => {
      console.log(error);
    })
  }

  async function postImage() { //envia uma imagem ao backend
    const data = new FormData();
    data.append("imagem", denunciaInfo.den_imagem);
    await axios.put("http://localhost:3344/denuncia/imagem", data,
      { headers: { den_protocolo: keys.protocoloDenuncia } }).then((res) => {
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (keys.fazerRelacionamento) {
      postAgressor();
      postImage();
      setkeys(prev => ({ ...prev, fazerRelacionamento: false }));
    }
  }, [keys.fazerRelacionamento])

  return (
    <>
      <React.Fragment>
        <Menu />
        <Submenu />
        <Zap />
      </React.Fragment>
      <div className="containerdenuncia">
          <div className="container-denuncia">
  
              <h1 id='denuncie'>DENUNCIE A OCORRÊNCIA DE VIOLÊNCIA CONTRA A MULHER</h1>
            
<br></br><br></br><br></br>
            

            <div className='crime'>
              <article className='ocorrencia'>
                <fieldset className='login-form-title11'>Sobre a Ocorrência</fieldset>
                <br />
                <div className='wrap-input-denuncia'>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" onChange={handleChange} name="den_denunciante" value={denunciaInfo.den_denunciante} placeholder="Como denunciante, eu sou..." required list='denunciante' />
                    <span className="focus-input"></span>
                    <datalist id='denunciante'>
                      <option className='tipoDenunciante' value="Vítima"></option>
                      <option className='tipoDenunciante' value="Testemunha"></option>
                    </datalist>
                  </div>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" onChange={handleChange} name="den_violencia" value={denunciaInfo.den_violencia} placeholder="Tipos de violência" required list='violencia' />
                    <span className="focus-input"></span>
                    <datalist id='violencia'>
                      <option className='tipoViolencia' value="Violência Física "></option>
                      <option className='tipoViolencia' value="Violência Psicológica "></option>
                      <option className='tipoViolencia' value="Violência Sexual "></option>
                      <option className='tipoViolencia' value="Violência Patrimonial "></option>
                      <option className='tipoViolencia' value="Violência Moral "></option>
                    </datalist>
                  </div>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" onChange={handleChange} name="den_frequencia" value={denunciaInfo.den_frequencia} placeholder="Frequência do ocorrido" required list='frequencia' />
                    <span className="focus-input"></span>
                    <datalist id="frequencia">
                      <option>Diariamente</option>
                      <option>Toda semana</option>
                      <option>Todo mês</option>
                      <option>Apenas uma vez</option>
                    </datalist>
                  </div>
                  <div className="wrap-input-denuncia">
                    <p className='text'>Data da Ocorrência: </p>   <input onChange={handleChange} value={denunciaInfo.den_data_ocorrencia} className='input' type="date" required />
                  </div>
                  <div className='wrap-input-denuncia'>
                    <p className='text'>Hora da Ocorrência: </p> <input className='input' onChange={handleChange} name="den_hora_ocorrencia" value={denunciaInfo.den_hora_ocorrencia} type='time' required />
                  </div>
                  <div>
                    <textarea className='input' placeholder="Descrição do ocorrido"  name="den_desc_local" required  value={denunciaInfo.den_desc_ocorrido} />
                    <span className="focus-input"></span>
                  </div>
                </div>
                <div>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" placeholder="Bairro" required  onChange={handleChange} name="den_bairro" value={denunciaInfo.den_bairro}/>
                    <span className="focus-input"></span>
                  </div>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" placeholder="Digite seu CEP" onChange={handleChange} name="den_cep" value={denunciaInfo.den_cep} required />
                    <span className="focus-input"></span>
                    <p className='text'><input type="checkbox" name="den_naosabe_cep"/>Não sei meu CEP</p>
                  </div>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" placeholder="Descrição do Local" onChange={handleChange} name="den_local" value={denunciaInfo.den_desc_local} required />
                    <span className="focus-input"></span>
                  </div>
                  <div className="wrap-input-denuncia">
                    <input className='input' type="text" placeholder="Ponto de Referência" onChange={handleChange} name="den_ponto_ref" value={denunciaInfo.den_ponto_ref} required />
                    <span className="focus-input"></span>
                  </div>
                </div>
              </article>
            </div>

            <br></br><br></br><br></br>

            <div className='agressor'>
              <fieldset className='login-form-title1'>Sobre o Agressor</fieldset>
              <br />
              <article>
                <div className="wrap-input-denuncia">
                  <input className='input' type="text" placeholder="Nome do Agressor" onChange={handleChangeAgr} name="agr_nome" value={agressorInfo.agr_nome} required />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input-denuncia">
                  <input className='input' type="text" placeholder="Apelido do Agressor" name="agr_apelido"  onChange={handleChangeAgr} value={agressorInfo.agr_apelido} required />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input-denuncia">
                  <input className='input' type="number" placeholder="Idade do Agressor" onChange={handleChangeAgr} name="agr_idade" value={agressorInfo.agr_idade} required />
                  <span className="focus-input"></span>
                </div>

                <div className="wrap-input-denuncia">
                  <input className='input' type="text"placeholder="Estatura do agressor" list='altura' onChange={handleChangeAgr} name="agr_estatura" value={agressorInfo.agr_estatura} required />
                  <datalist id="altura">
                    <option value="Baixa"></option>
                    <option value="Mediana"></option>
                    <option value="Alta"></option>
                  </datalist>
                  <span className="focus-input"></span>
                </div>

                <div className="wrap-input-denuncia">
                <input className='input' type="text" placeholder="Qual o tipo físico do agressor?" required list='tipofisico' onChange={handleChangeAgr} value={agressorInfo.agr_tipo_fisico}/>
                  <datalist id="tipofisico">
                    <option value="Magro"></option>
                    <option value="Médio"></option>
                    <option value="Gordo"></option>
                  </datalist>
                  <span className="focus-input"></span>
                </div>

                <div className="wrap-input-denuncia">
                <input className='input' type="text" placeholder="Qual a cor da pele do agressor?" required list='corpele' onChange={handleChangeAgr} value={agressorInfo.agr_cor_pele}/>
                  <datalist id="corpele">
                    <option value="Branco"></option>
                    <option value="Amarelo"></option>
                    <option value="Pardo"></option>
                    <option value="Preto"></option>
                  </datalist>
                  <span className="focus-input"></span>
                </div>

                <div className="wrap-input-denuncia">
                <input className='input' type="text" placeholder="Qual a cor do cabelo do agressor?" required list='corcabelo' onChange={handleChangeAgr} value={agressorInfo.agr_cor_cabelo}/>
                  <datalist id="corcabelo">
                    <option value="Castanho Claro"></option>
                    <option value="Castanho Escuro"></option>
                    <option value="Loiro claro"></option>
                    <option value="Loiro médio"></option>
                    <option value="Grisalho"></option>
                    <option value="Ruivo"></option>
                    <option value="Preto"></option>
                    <option value="Outra cor"></option>
                  </datalist>
                  <span className="focus-input"></span>
                </div>


                <div className="wrap-input-denuncia">
                <input className='input' type="text" placeholder="Qual o tipo de cabelo do agressor?" required list='tipocabelo' onChange={handleChangeAgr} value={agressorInfo.agr_tipo_cabelo}/>
                  <datalist id="tipocabelo">
                    <option value="Calvo"></option>
                    <option value="Curto"></option>
                    <option value="Médio"></option>
                    <option value="Longo"></option>
                    <option value="Raspado"></option>
                  </datalist>
                  <span className="focus-input"></span>
                </div>
              

                <div className="wrap-input-denuncia">
                <input className='input' type="text" placeholder="Qual a cor dos olhos do agressor?" required list='corolhos' onChange={handleChangeAgr} value={agressorInfo.agr_cor_olhos}/>
                  <datalist id="corolhos">
                    <option value="Verde"></option>
                    <option value="Azul"></option>
                    <option value="Castanho "></option>
                    <option value="Preto"></option>
                  </datalist>
                  <span className="focus-input"></span>
                </div>
              
          
                <div className="wrap-input-denuncia">
                  <input className='input' type="text" placeholder="O agressor mora na mesma residência que a vítima?"  onChange={handleChangeAgr} value={agressorInfo.agr_mesma_residencia} required list='locAgr' />
                  <span className="focus-input"></span>
                  <datalist id="locAgr">
                    <option>Sim</option>
                    <option>Não</option>
                  </datalist>
                </div>
                
                <div className="wrap-input-denuncia">
                  <input className='input' placeholder="Qual o endereço do agressor?" onChange={handleChangeAgr} name="agr_endereco" value={agressorInfo.agr_endereco} type="text" required />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input-denuncia">
                  <input className='input' placeholder="Ponto de referência do endereço acima"  onChange={handleChangeAgr} type="text" required value={agressorInfo.agr_pont_ref_end} />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input-denuncia">
                  <input className='input' placeholder="Local de trabalho do agressor" onChange={handleChangeAgr} type="text"  value={agressorInfo.agr_local_trabalho} required />
                  <span className="focus-input"></span>
                </div>
            
                <div className="wrap-input-denuncia">
                  <input className='input' type="text" placeholder="O agressor possui relacionamento com a vítima?" required list='sitAgr' onChange={handleChangeAgr} value={agressorInfo.agr_possui_relacionamento}/>
                  <span className="focus-input"></span>
                  <datalist id="sitAgr">
                  <option value="Não possui"></option>
                    <option value="Sim, colega de trabalho"></option>
                    <option value="Sim, amigo"></option>
                    <option value="Sim, irmão"></option>
                    <option value="Sim, namorado"></option>
                    <option value="Sim, marido"></option>
                    <option value="Sim, parente"></option>
                  </datalist>
                </div>
              </article>


            </div>
            <div className="wrap-input1">
              <p className='text'> Selecionar arquivos - Use para enviar provas como fotos de marcas de agressão.</p>
              <br />
              <input className='input1' type="file" onChange={handleImage}  />
              <br /><br />
              <span className="focus-input" data-placeholder=""></span>
            </div>
            <div className='container-denuncia-form-btn'>
              <button type='reset' className="botaolimpar" onClick={clear}>Limpar</button>
              <p className='btnSpace'>espaço</p>
              <button type='submit' className="botaoenviar" onClick={denunciarOprt}>Enviar</button>
            </div>
            <br />
          </div>
        </div>
      <React.Fragment>
        <Footer />
      </React.Fragment>
    </>

  )
}

export default Denuncia;
