import { ChangeEvent, useEffect, useState } from 'react'
import './../css/denuncia.css'
import axios from 'axios';
import React from "react";
import Zap from "../components/popup/zapzap";
import Menu from "./../components/menus/Menu"
import Submenu from "./../components/menus/submenu"
import Footer from "./../components/menus/footer"
import { IoIosArrowBack } from "react-icons/Io"
import {Link, useNavigate } from "react-router-dom"

function Denuncia() {
  const navigate = useNavigate();
  const [denunciaInfo, setDenuncia] = useState({ //atributos da denúncia
    den_denunciante : "",
    den_violencia : "",
    den_carac_local : "",
    den_imagem : "",
    den_cep : "",
    den_ponto_ref : "",
    den_local : "",
    den_frequencia : "",
    den_hora_ocorrencia : "",
    den_data_ocorrencia : ""
  });
  const [keys, setkeys] = useState({ //chaves para criação da tabela de relacionamento
    fazerRelacionamento : false,
    protocoloDenuncia : "",
    idAgressor :  ""
  })
  const [agressorInfo, setAgressor] = useState({ //atributos do agressor
    agr_carac_espec : "",
    agr_cor_cabelo : "",
    agr_cor_olhos : "",
    agr_cor_pele : "",
    agr_endereco : "",
    agr_estatura : "",
    agr_idade : "",
    agr_nome : "",
    agr_possibili_fuga : "",
    agr_possui_porte : "",
    agr_sexo : "",
    agr_tipo_fisico : "",
    agr_tipo_cabelo : "",
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => { //evento de mudança para informações de denúncia
    setDenuncia(prev => ({...prev, [e.target.name] : e.target.value}));
  } 
  const handleChangeAgr = (e:ChangeEvent<HTMLInputElement>) => { //evento de mudança para informações de agressor
    setAgressor(prev => ({...prev, [e.target.name] : e.target.value}));
  }
  const handleImage = (e:ChangeEvent<HTMLInputElement>) => {
    setDenuncia(prev => ({...prev, den_imagem: e.target.files[0]}));
  }

  function clear() { //limpa as informações
    setDenuncia({ //da denúncia
      den_denunciante : "",
      den_violencia : "",
      den_carac_local : "",
      den_imagem : "",
      den_cep : "",
      den_ponto_ref : "",
      den_local : "",
      den_frequencia : "",
      den_hora_ocorrencia : "",
      den_data_ocorrencia : ""
    })
    setAgressor({ //do agressor
      agr_carac_espec : "",
      agr_cor_cabelo : "",
      agr_cor_olhos : "",
      agr_cor_pele : "",
      agr_endereco : "",
      agr_estatura : "",
      agr_idade : "",
      agr_nome : "",
      agr_possibili_fuga : "",
      agr_possui_porte : "",
      agr_sexo : "",
      agr_tipo_fisico : "",
      agr_tipo_cabelo : "",
    })
  }

  function denunciarOprt() {
    postDenuncia();
  }

  async function postDenuncia() {
    await axios.post(`http://localhost:3344/denuncia`, { //criar denúncia
      den_denunciante : denunciaInfo.den_denunciante,
      den_violencia : denunciaInfo.den_violencia,
      den_carac_local : denunciaInfo.den_carac_local,
      den_imagem : denunciaInfo.den_imagem,
      den_cep : denunciaInfo.den_cep,
      den_ponto_ref : denunciaInfo.den_ponto_ref,
      den_local : denunciaInfo.den_local,
      den_frequencia : denunciaInfo.den_frequencia,
      den_hora_ocorrencia : denunciaInfo.den_hora_ocorrencia,
      den_data_ocorrencia : denunciaInfo.den_data_ocorrencia
    }).then((res) => {
      localStorage.setItem("denuncia", res.data.protocolo); //Guardar protocolo denúncia no localStorage
       //navega para outra página
      setkeys(prev => ({...prev, protocoloDenuncia : res.data.protocolo, fazerRelacionamento : true}));
    }).catch((error) => {
      console.log(error);
    })
  }

  async function postAgressor() {
    await axios.post(`http://localhost:3344/agressor`, { //criar agressors
      agr_endereco : agressorInfo.agr_endereco,
      agr_idade : agressorInfo.agr_idade,
      agr_nome : agressorInfo.agr_nome,
      Denuncia_den_protocolo : localStorage.getItem("denuncia")
    }).then((res) => {
      alert("Denúncia criad")
      navigate("/protocolo");
    }).catch((error) => {
      console.log(error);
    })
  }

  async function postImage() { //envia uma imagem ao backend
    const data = new FormData();
        data.append("imagem", denunciaInfo.den_imagem);  
        await axios.put("http://localhost:3344/denuncia/imagem", data, 
        {headers : {den_protocolo : keys.protocoloDenuncia}}).then((res) => {
        }).catch((error) => {
            console.log(error);
        });
  }

  useEffect(() => {
    if(keys.fazerRelacionamento) {
      postAgressor();
      postImage();
      setkeys(prev => ({...prev, fazerRelacionamento : false}));
    }
  }, [keys.fazerRelacionamento])

  return (
  <>
    <React.Fragment>
    <Menu/>
    <Submenu/>
    <Zap/>
    </React.Fragment>

    <div className="Container">
    <div className="container-login">
    <div className="wrap-login">
    <div className="login-form">
    <Link to="/">
   <IoIosArrowBack className="backdenuncia"/>
   </Link>
        <div className='login-form-title'>
          <h1 id='denuncie'>DENUNCIE A OCORRÊNCIA DE VIOLÊNCIA CONTRA A MULHER</h1>
        </div>
        <div className='crime'>
          <fieldset className='login-form-title11'>Sobre o Crime</fieldset>
          <br />
          <div className='wrap-input'>
          <div className="wrap-input">
            <input className='input' type="text" onChange={handleChange} name="den_denunciante" value={denunciaInfo.den_denunciante} placeholder="Como denunciante, eu sou..." required list='denunciante'/>
            <span className="focus-input"></span>
            <datalist id='denunciante'>
              <option className='tipoDenunciante' value="Vítima"></option>
              <option className='tipoDenunciante' value="Testemunha"></option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" onChange={handleChange} name="den_violencia" value={denunciaInfo.den_violencia} placeholder="Tipos de violência" required list='violencia'/>
            <span className="focus-input"></span>
            <datalist id='violencia'>
              <option className='tipoViolencia' value="Violência Física "></option>
              <option className='tipoViolencia' value="Violência Psicológica "></option>
              <option className='tipoViolencia' value="Violência Sexual "></option>
              <option className='tipoViolencia' value="Violência Patrimonial "></option>
              <option className='tipoViolencia' value="Violência Moral "></option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" onChange={handleChange} name="den_frequencia" value={denunciaInfo.den_frequencia} placeholder="Frequência do ocorrido" required list='frequencia'/>
            <span className="focus-input"></span> 
            <datalist id="frequencia">
              <option>Diariamente</option>
              <option>Toda semana</option>
              <option>Todo mês</option>
              <option>Apenas uma vez</option>
            </datalist>
            </div>
            <div className="wrap-input">
            <p className='text'>Data da Ocorrência: </p>   <input onChange={handleChange} name="den_data_ocorrencia" value={denunciaInfo.den_data_ocorrencia} className='input' type="date" required />
            </div>
            <div className='wrap-input'>
            <p className='text'>Hora da Ocorrência: </p> <input className='input' onChange={handleChange} name="den_hora_ocorrencia" value={denunciaInfo.den_hora_ocorrencia} type='time' required />
            </div>
            <div className="wrap-input">
            <textarea className='input' placeholder="Descrição do ocorrido" required />
            <span className="focus-input"></span>
            </div>
          </div>
          <br />
          <fieldset className='login-form-title1'>Sobre o Local</fieldset>
          <br /> 
          <div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Bairro" required />
          <span className="focus-input"></span>
          </div>
          
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Digite seu CEP" onChange={handleChange} name="den_cep" value={denunciaInfo.den_cep} required />
          <span className="focus-input"></span>
          <br />
          <p className='text'><input type="checkbox" name="" />Não sei meu CEP</p>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Descrição do Local" onChange={handleChange} name="den_local" value={denunciaInfo.den_local} required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Ponto de Referência" onChange={handleChange} name="den_ponto_ref" value={denunciaInfo.den_ponto_ref} required />
          <span className="focus-input"></span>
          </div>
          </div>
          <br />
          <fieldset className='login-form-title1'>Sobre o Agressor</fieldset>
          <br /> 
          <div className="wrap-input">
            <input className='input' type="text" placeholder="O ocorrido foi efetuado por mais de um agressor?" required list='qntAgr'/>
            <span className="focus-input"></span> 
            <datalist id="qntAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
            <div className="wrap-input">
          <input className='input' type="number" placeholder="Se sim, quantos?" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Nome do Agressor" onChange={handleChangeAgr} name="agr_nome" value={agressorInfo.agr_nome} required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="text" placeholder="Apelido do Agressor" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' type="number" placeholder="Idade do Agressor" onChange={handleChangeAgr} name="agr_idade" value={agressorInfo.agr_idade} required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
            <input className='input' type="text" placeholder="O agressor mora na mesma residência que a vítima?" required list='locAgr'/>
            <span className="focus-input"></span> 
            <datalist id="locAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
          <div className="wrap-input">
          <input className='input' placeholder="Se a resposta for não, qual o endereço do agressor?" onChange={handleChangeAgr} name="agr_endereco" value={agressorInfo.agr_endereco} type="text" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' placeholder="Ponto de referência/Características" type="text" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
          <input className='input' placeholder="Local de trabalho do agressor" type="text" required />
          <span className="focus-input"></span>
          </div>
          <div className="wrap-input">
            <input className='input' type="text" placeholder="O agressor tem algum tipo de relacionamento com a vítima?" required list='relAgr'/>
            <span className="focus-input"></span> 
            <datalist id="relAgr">
              <option>Sim</option>
              <option>Não</option>
            </datalist>
            </div>
            <div className="wrap-input">
            <input className='input' type="text" placeholder="Se sim, qual?" required list='sitAgr'/>
            <span className="focus-input"></span> 
            <datalist id="sitAgr">
              <option value="Colega de trabalho"></option>
              <option value="Amigo"></option>
              <option value="Irmão"></option>
              <option value="Namorado"></option>
              <option value="Marido"></option>
              <option value="Parente"></option>
            </datalist>
            </div>
          <div className="wrap-input1">
          <p className='text'> Selecionar arquivos - Use para enviar provas como fotos de marcas de agressão.</p>
          <br />
          <input className='input1' type="file" onChange={handleImage}/>
          <span className="focus-input" data-placeholder=""></span> <br /><br />
          </div>
        </div>
     
      <div className='container-login-form-btn'>
        <button type='reset' className="login-form-btn2" onClick={clear}>Limpar</button>
        <br /><br />
        <button type='submit' className="login-form-btn" onClick={denunciarOprt}>Enviar</button>
      </div>
      <br />
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

export default Denuncia;
