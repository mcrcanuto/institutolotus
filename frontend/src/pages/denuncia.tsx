import { ChangeEvent, useEffect, useState } from 'react'
import './../css/denuncia.css'
import axios from 'axios';
import React from "react";
import Zap from "../components/popup/zapzap";
import Menu from "./../components/menus/Menu"
import Submenu from "./../components/menus/submenu"
import Footer from "./../components/menus/footer"
import { useNavigate } from "react-router-dom"

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
    den_desc_ocorrido: "",
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
    //agr_possibili_fuga: "",
    agr_possui_relacionamento: "",
    agr_sexo: "",
    agr_tipo_fisico: "",
    agr_tipo_cabelo: "",
    agr_apelido: "",
    agr_mesma_residencia: "",
    agr_pont_ref_end: "",
    agr_local_trabalho: "",

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
      den_desc_ocorrido: "",
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
      //agr_possibili_fuga: "",
      agr_possui_relacionamento: "",
      agr_sexo: "",
      agr_tipo_fisico: "",
      agr_tipo_cabelo: "",
      agr_apelido: "",
      agr_mesma_residencia: "",
      agr_pont_ref_end: "",
      agr_local_trabalho: "",
    })
  }

  function denunciarOprt() {
    postDenuncia();
  }

  async function postDenuncia() {
    console.log(denunciaInfo)
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


  // consumo da api cep
  
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  })
  
  useEffect(() => {
    const cepNumeros = cep.replace('-', '')
    if (cepNumeros.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          setEndereco(data)
          setDenuncia(prev => ({ ...prev, den_bairro: data.bairro }));
        }
        )
        .catch(error => console.error(error))
    }
  }, [cep])


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
                <p className='text'>Como denunciante, eu sou... </p>  <input className='input' type="text" onChange={handleChange} name="den_denunciante" defaultValue={denunciaInfo.den_denunciante} required list='denunciante' />
                  <span className="focus-input"></span>
                  <datalist id='denunciante'>
                    <option className='tipoDenunciante' value="Vítima"></option>
                    <option className='tipoDenunciante' value="Testemunha"></option>
                  </datalist>
                </div>
                <div className="wrap-input-denuncia">
                <p className='text'>Tipo de Violência </p> <input className='input' type="text" onChange={handleChange} name="den_violencia" defaultValue={denunciaInfo.den_violencia} required list='violencia' />
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
                <p className='text'>Frequência da violência </p>  <input className='input' type="text" onChange={handleChange} name="den_frequencia" defaultValue={denunciaInfo.den_frequencia}  required list='frequencia' />
                  <span className="focus-input"></span>
                  <datalist id="frequencia">
                    <option>Diariamente</option>
                    <option>Toda semana</option>
                    <option>Todo mês</option>
                    <option>Apenas uma vez</option>
                  </datalist>
                </div>
                <div className="wrap-input-denuncia">
                  <p className='text'>Data da Ocorrência </p>   <input onChange={handleChange} defaultValue={denunciaInfo.den_data_ocorrencia} className='input' type="date" required />
                </div>
                <div className='wrap-input-denuncia'>
                  <p className='text'>Hora da Ocorrência </p> <input className='input' onChange={handleChange} name="den_hora_ocorrencia" defaultValue={denunciaInfo.den_hora_ocorrencia} type='time' required />
                </div>
                <div>
                <p className='text'>Descrição do ocorrido </p>  <textarea className='input'  name="den_desc_local" required defaultValue={denunciaInfo.den_desc_ocorrido} />
                  <span className="focus-input"></span>
                </div>
              </div>
           
               
                
                <div className="wrap-input-denuncia">
                <p className='text'>CDigite seu Cep </p>     <input className='input' type="text" required  defaultValue={cep} onChange={e => {
                    setCep(e.target.value);
                    handleChange(e);
                  }} name="den_cep" />
             <span className="focus-input"></span>
                  </div>

                  <div className="wrap-input-denuncia">
                  <p className='text'><input type="checkbox" name="den_naosabe_cep" />Não sei o CEP</p>
               </div>
                   
                   
                  <div className="wrap-input-denuncia">
                  <p className='text'>Bairro </p> <input className='input' type="text"  required onChange={handleChange} name="den_bairro" defaultValue={endereco.bairro} />
                  <span className="focus-input"></span>
                </div>

               

                <div className="wrap-input-denuncia">
                <p className='text'>Descrição do local </p> <input className='input' type="text"  onChange={handleChange} name="den_local" defaultValue={denunciaInfo.den_desc_local} required />
                  <span className="focus-input"></span>
                </div>
                <div className="wrap-input-denuncia">
                <p className='text'>Ponto de referência do local </p> <input className='input' type="text"  onChange={handleChange} name="den_ponto_ref" defaultValue={denunciaInfo.den_ponto_ref} required />
                  <span className="focus-input"></span>
                </div>
             
            </article>
          </div>

          <br></br><br></br><br></br>

          <div className='agressor'>
            <fieldset className='login-form-title1'>Sobre o Agressor</fieldset>
            <br />
            <article>
              <div className="wrap-input-denuncia">
              <p className='text'>Nome do agressor </p> <input className='input' type="text"  onChange={handleChangeAgr} name="agr_nome" defaultValue={agressorInfo.agr_nome} required />
                <span className="focus-input"></span>
              </div>
              <div className="wrap-input-denuncia">
              <p className='text'>Apelido do agressor </p> <input className='input' type="text"  name="agr_apelido" onChange={handleChangeAgr} defaultValue={agressorInfo.agr_apelido} required />
                <span className="focus-input"></span>
              </div>
              <div className="wrap-input-denuncia">
              <p className='text'>Idade do agressor</p> <input className='input' type="number"  onChange={handleChangeAgr} name="agr_idade" defaultValue={agressorInfo.agr_idade} required />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input-denuncia">
              <p className='text'>Estatura </p> <input className='input' type="text"  list="estatura" onChange={handleChangeAgr} name="agr_estatura" defaultValue={agressorInfo.agr_estatura} required />
                <datalist id="estatura">
                  <option className='tipoEstatura' value="Baixa"></option>
                  <option className='tipoEstatura' value="Mediana"></option>
                  <option className='tipoEstatura' value="Alta"></option>
                </datalist>
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input-denuncia">
              <p className='text'>Tipo físico </p> <input className='input' type="text"  required list='tipofisico' onChange={handleChangeAgr} defaultValue={agressorInfo.agr_tipo_fisico} />
                <datalist id='tipofisico'>
                  <option value="Magro"></option>
                  <option value="Médio"></option>
                  <option value="Gordo"></option>
                </datalist>
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input-denuncia">
              <p className='text'>Cor da pele </p> <input className='input' type="text"  required list='corpele' onChange={handleChangeAgr} defaultValue={agressorInfo.agr_cor_pele} />
                <datalist id="corpele">
                  <option value="Branco"></option>
                  <option value="Amarelo"></option>
                  <option value="Pardo"></option>
                  <option value="Preto"></option>
                </datalist>
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input-denuncia">
              <p className='text'>Cor do cabelo </p> <input className='input' type="text"  required list='corcabelo' onChange={handleChangeAgr} defaultValue={agressorInfo.agr_cor_cabelo} />
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
              <p className='text'>Tipo do cabelo </p>  <input className='input' type="text"   required list='tipocabelo' onChange={handleChangeAgr} defaultValue={agressorInfo.agr_tipo_cabelo} />
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
              <p className='text'>Cor dos olhos </p>  <input className='input' type="text" required list='corolhos' onChange={handleChangeAgr} defaultValue={agressorInfo.agr_cor_olhos} />
                <datalist id="corolhos">
                  <option value="Verde"></option>
                  <option value="Azul"></option>
                  <option value="Castanho "></option>
                  <option value="Preto"></option>
                </datalist>
                <span className="focus-input"></span>
              </div>


              <div className="wrap-input-denuncia">
              <p className='text'>O agressor mora na mesma residênciaque a vítima? </p> <input className='input' type="text"   onChange={handleChangeAgr} defaultValue={agressorInfo.agr_mesma_residencia} required list='locAgr' />
                <span className="focus-input"></span>
                <datalist id="locAgr">
                  <option>Sim</option>
                  <option>Não</option>
                </datalist>
              </div>

              <div className="wrap-input-denuncia">
              <p className='text'>Qual o endereço do agressor?</p> <input className='input'  onChange={handleChangeAgr} name="agr_endereco" defaultValue={agressorInfo.agr_endereco} type="text" required />
                <span className="focus-input"></span>
              </div>
              <div className="wrap-input-denuncia">
              <p className='text'>Ponto de referência do endereço acima </p>  <input className='input' onChange={handleChangeAgr} type="text" required defaultValue={agressorInfo.agr_pont_ref_end} />
                <span className="focus-input"></span>
              </div>
              <div className="wrap-input-denuncia">
              <p className='text'>Local de trabalho do agressor </p>  <input className='input'  onChange={handleChangeAgr} type="text" defaultValue={agressorInfo.agr_local_trabalho} required />
                <span className="focus-input"></span>
              </div>

              <div className="wrap-input-denuncia">
              <p className='text'>O agressor possui algum relacionamento com a vítima? </p>  <input className='input' type="text"  required list='sitAgr' onChange={handleChangeAgr} defaultValue={agressorInfo.agr_possui_relacionamento} />
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
            <input className='input1' type="file" onChange={handleImage} />
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
