import "./../css/geral.css"
import "./../css/editarperfil.css"
import { IoIosArrowBack } from "react-icons/Io"
import {Link } from "react-router-dom"
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import decode from "../components/codigos/decoder";

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
        senha : getPolicial[0].pol_senha
      })
    }

    return  (
        <div className="Container">
            
   

        <div className="container-login">
  
        <div className="wrap-login">
            
        <Link to="/perfilpolicial">
   <IoIosArrowBack className="back"/>
   </Link>
   
        <form className="login-form">

        <span className="login-form-title2">Editar Perfil</span>
        <span className="login-form-title"></span>
        
        <span className="login-form-title">Dados Pessoais</span>
     

        <div className="wrap-input">
        <input className='input' type="name" required  placeholder="Nome" name="nome" value={polUpdate.nome || ""} onChange={handleChange}/>
        <span className="focus-input" ></span>
        </div>

        <div className="wrap-input">
        <input className='input'type="name"  required  placeholder="Sobrenome" name="sobreNome" value={polUpdate.sobreNome || ""} onChange={handleChange}/>
        <span className="focus-input"></span>
        </div>

        <div className="wrap-input">
    <input className='input' type="name" required placeholder="Cpf" name="cpf" value={polUpdate.cpf || ""} onChange={handleChange}/>
    <span className="focus-input" ></span>
    </div>

        <span className="login-form-title">Dados de Login</span>
      
    
        <div className="wrap-input">
        <input className='input' type="email" required  placeholder="Email" value={polUpdate.email} name="email" onChange={handleChange}/>
        <span className="focus-input" ></span>
        </div>
    
        <div className="wrap-input">
        <input className='input' type="password" required  placeholder="Senha"  name="senha" onChange={handleChange}/>
        <span className="focus-input" ></span>
        </div>

        <div className="container-login-form-btn">
      <button className="login-form-btn" onClick={updatePolicial}>Salvar Edições</button>
     </div>

     
     
        <div className="container-login-form-btn2">
      <button className="sim" type="reset" onClick={reverterMudanças}>Cancelar</button>
     </div>
        </form>

        <div >
          <Link to="/querexcluirsuaconta?">
      <button id="apagarconta">Apagar Conta</button>
      </Link>
     </div>    
        </div>
        </div>
        </div>
        );
};

export default EditarPerfil;