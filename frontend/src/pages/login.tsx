import './../css/login.css'
import {Link} from "react-router-dom"



function Login() {


  return (
  

    <div className="Container">



    <div className="container-login">

    

    <div className="wrap-login">

      
    <form className="login-form" >
    <span className="login-form-title">Entrar como policial</span>
    <span className="login-form-title">
    
    </span>
    
    <div className="wrap-input">
    <input className='input' type="email"/>
    <span className="focus-input" data-placeholder="Email"></span>
    </div>
    <div className="wrap-input">
    <input className='input'type="password" />
    <span className="focus-input" data-placeholder="Password"></span>
    </div>

  <div className="container-login-form-btn">
  <button className="login-form-btn">Entrar</button>
 </div>

 <div className="container-login-form-btn">
 <Link to="/cadastro">
  <button className="login-form-btn-a">Criar Conta </button>
  </Link>
 </div>

 
 
    </form>
    </div>
    </div>
    </div>
  )  
}

export default Login;

