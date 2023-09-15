import { ChangeEvent, useState } from 'react';
import './../css/login.css'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";


function Login() {

  const [loginInfo, setInfo] = useState({
      senha:  "",
      email : ""
  });
  const navigate = useNavigate();

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInfo(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  async function login() {
    await axios.get(`http://localhost:3344/policial/login/${loginInfo.email}/${loginInfo.senha}`).then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/perfilpolicial");
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
  

    <div className="Container">



    <div className="container-login">

    

    <div className="wrap-login">

      
    <div className="login-form" >
    <span className="login-form-title">Entrar como policial</span>
    <span className="login-form-title">
    
    </span>
    
    <div className="wrap-input">
    <input className='input' type="email" onChange={handleChange} name="email"/>
    <span className="focus-input" data-placeholder="Email"></span>
    </div>
    <div className="wrap-input">
    <input className='input'type="password"  onChange={handleChange} name="senha"/>
    <span className="focus-input" data-placeholder="Password"></span>
    </div>

  <div className="container-login-form-btn">
  <button className="login-form-btn" onClick={() => {login()}}>Entrar</button>
 </div>

 <div className="container-login-form-btn">
 <Link to="/cadastro">
  <button className="login-form-btn-a" onClick={() => { navigate("/cadastro")}}>Criar Conta </button>
  </Link>
 </div>

 
 
    </div>
    </div>
    </div>
    </div>
  )  
}

export default Login;

