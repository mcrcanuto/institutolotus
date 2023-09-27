import "./../css/geral.css"
import "./../css/editarperfil.css"
import {Link } from "react-router-dom"
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import decode from "../components/codigos/decoder";
import React from "react";
import MenuPolicial from "../components/menus/MenuPolicial";
import FooterPolicial from "../components/menus/FooterPolicial";

function EditarPerfil () {

    const [polUpdate, setPolUpdate] = useState({
      nome : "",
      sobreNome : "",
      cpf : "",
      email : "",
      senha : ""
    });
    const [policial, setPolicial] = useState(decode(localStorage.getItem("token")));
    const [getPolicial, setGet] = useState([]);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setPolUpdate(prev => ({...prev, [e.target.name] : e.target.value}));
    }

    useEffect(() => {
      if(policial.pol_cpf) queryPolicial();
    }, [policial])

    useEffect(() => {
      if(getPolicial.length > 0)setPolUpdate(prev => ({...prev,
        nome : getPolicial[0].pol_nome,
        sobreNome : getPolicial[0].pol_sobrenome,
        cpf : getPolicial[0].pol_cpf,
        email : getPolicial[0].pol_email,
        senha : getPolicial[0].pol_senha
      }))
    }, [getPolicial])

    async function updatePolicial() {
      let data;
      if (polUpdate.senha == getPolicial[0].pol_senha || polUpdate.senha == "") {
        data = {
          pol_nome : polUpdate.nome,
          pol_sobrenome : polUpdate.sobreNome,
          pol_email: polUpdate.email,
          pol_cpf: polUpdate.cpf,
        }
      }
      else {
        data = {
          pol_nome : polUpdate.nome,
          pol_sobrenome : polUpdate.sobreNome,
          pol_email: polUpdate.email,
          pol_cpf: polUpdate.cpf,
          senha : polUpdate.senha
        }
      }
        await axios.put(`http://localhost:3344/policial/${policial.pol_cpf}`, data, {headers : {
          Authorization : "Bearer " + localStorage.getItem("token")
        }}).then((res) => {
          alert(res.data.token);
          localStorage.setItem("token", res.data.token);
        }).catch((error) => {
          console.log(error);
        })
    }

    async function queryPolicial() {
      await axios.get(`http://localhost:3344/policial/cpf/${policial.pol_cpf}`, {headers : {
        Authorization : "Bearer " + localStorage.getItem("token")}}).then((res) => {
        setGet(res.data);
      }).catch((error) => {
        console.log(error);
      })
    }

    function reverterMudanças() {
      setPolUpdate({
        nome : getPolicial[0].pol_nome,
        sobreNome : getPolicial[0].pol_sobrenome,
        cpf : getPolicial[0].pol_cpf,
        email : getPolicial[0].pol_email,
        senha : getPolicial[0].pol_senha,
      })
    }




    return  (
<>

<React.Fragment>
  <MenuPolicial/>
</React.Fragment>

<br></br><br></br>

<div className="roweditar">
  <div className="columneditar">

  <div className="wrap-editar-esquerda">

<span className="editar-esquerda-title">Minha Conta</span>

<br></br>

<div className="wrap-input-editar-esquerda">
<p id="nomesobrenome">Nome Sobrenome</p>
<br></br>
<p id="editar-email">email@email.com</p>
<br ></br>
<br></br>

<p id="editar-den-andamento"> 0 Denúncias em Andamento</p>

<p id="editar-den-finalizada">0 Denúncias Finalizadas</p>

<br></br>

<span className="focus-input"></span>
</div>


</div>
</div>



  <div className="columneditar">
    
  
        <div className="wrap-editar-direita">

   
        <form className="login-form">

        <span className="editar-title">Editar Perfil</span>        
        <span className="editar-subtitle">Dados Pessoais</span>
     

        <div className="wrap-input-editar">
        <input className='inputeditar' type="name" required  placeholder="Nome" name="nome" value={polUpdate.nome || ""} onChange={handleChange}/>
      
        </div>

        <div className="wrap-input-editar">
        <input className='inputeditar'type="name"  required  placeholder="Sobrenome" name="sobreNome" value={polUpdate.sobreNome || ""} onChange={handleChange}/>
      
        </div>

        <div className="wrap-input-editar">
    <input className='inputeditar' type="name" required placeholder="Cpf" name="cpf" value={polUpdate.cpf || ""} onChange={handleChange}/>
    
    </div>

        <span className="editar-subtitle">Dados de Login</span>
      
    
        <div className="wrap-input-editar">
        <input className='inputeditar' type="email" required  placeholder="Email" value={polUpdate.email} name="email" onChange={handleChange}/>
        
        </div>
    
        <div className="wrap-input-editar">
        <input className='inputeditar' type="password" required  placeholder="Senha"  name="senha" onChange={handleChange}/>
       
        </div>

        <div className="container-login-form-btn">
      <button  onClick={updatePolicial}>Salvar Edições</button>
     </div>

     
     
        <div className="container-login-form-btn2">
      <button  type="reset" onClick={reverterMudanças}>Cancelar</button>
     </div>
        </form>

        <div >
          <Link to="/querexcluirsuaconta?">
      <button >Apagar Conta</button>
      </Link>
     </div>    
        </div>
        </div>
        
        </div>

        <br></br><br></br>

  <React.Fragment>
  <FooterPolicial/>
</React.Fragment>

        </>
          );
};

export default EditarPerfil;