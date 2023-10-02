
import {Link, useNavigate} from "react-router-dom"
import './../css/cadastro.css'
import axios from 'axios'
import {ChangeEvent, useState} from 'react'



function Cadastro () {


  const navigate = useNavigate(); //declara navegador
  const [cadInfo, setInfo] = useState({
      nome : "",
      sobreNome : "",
      email : "",
      cpf : "",
      senha : ""
  })

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setInfo(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  async function cadastro() {
    await axios.post(`http://localhost:3344/policial`, {
      pol_nome: cadInfo.nome,
      pol_sobrenome : cadInfo.sobreNome,
      pol_email : cadInfo.email,
      pol_cpf : cadInfo.cpf,
      senha : cadInfo.senha
    }).then((res) => {
      localStorage.setItem('token', res.data.token); //coloca o item dentro do localStorage
      navigate("/perfilpolicial"); //navega para outra página
    }).catch((error) => {
      console.log(error);
    })
  }

  return  (
<>
    <div className="Container">
    <div className="container-login">
    <div className="wrap-login">
    <div className="login-form">
    <span className="login-form-title">Cadastrar Conta</span>
    <span className="login-form-title">
    
    </span>
    
    <div className="wrap-input">
    <input className='input' required type="text" placeholder="Nome" onChange={handleChange} name="nome" value={cadInfo.nome}/>
    <span className="focus-input"  ></span>
    </div>
    <div className="wrap-input">
    <input className='input'type="text" placeholder="Sobrenome" required  onChange={handleChange} name="sobreNome" value={cadInfo.sobreNome}/>
    <span className="focus-input" ></span>
    </div>

    <div className="wrap-input">
    <input className='input' placeholder="Email" type="email" required onChange={handleChange} name="email" value={cadInfo.email}/>
    <span className="focus-input" ></span>
    </div>

    <div className="wrap-input">
    <input className='input' placeholder="CPF" type="text" required  
    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
    onChange={handleChange} name="cpf" maxLength={11} value={cadInfo.cpf}/>
    <span className="focus-input" ></span>
    </div>

    <div className="wrap-input" >
    <input className='input' placeholder="Senha" type="password" required  onChange={handleChange} name="senha" value={cadInfo.senha}/>
    <span className="focus-input" ></span>
    </div>


    <div className="container-login-form-btn">
  <button className="login-form-btn" onClick={() => {cadastro()}}>Cadastrar</button>
 </div>

 
 <div className="container-login-form-btn">
 <Link to="/Login">
  <span>Já possui uma conta?</span>
  </Link>
 </div>

 
 
    </div>
    </div>
    </div>
    </div>

    </>
    );
  
  }

export default Cadastro;


  
  