import '././css/cadastro.css'

function Cadastro() {
 
  return  (
    <div className="Container">
    <div className="container-login">
    <div className="wrap-login">
    <form className="login-form">
    <span className="login-form-title">Cadastrar Conta</span>
    <span className="login-form-title">
    
    </span>
    
    <div className="wrap-input">
    <input className='input' type="name"/>
    <span className="focus-input" data-placeholder="Nome"></span>
    </div>
    <div className="wrap-input">
    <input className='input'type="name"/>
    <span className="focus-input" data-placeholder="Sobrenome"></span>
    </div>

    <div className="wrap-input">
    <input className='input' type="email"/>
    <span className="focus-input" data-placeholder="Email"></span>
    </div>

    <div className="wrap-input">
    <input className='input' type="password"/>
    <span className="focus-input" data-placeholder="Senha"></span>
    </div>

    <div className="wrap-input">
    <input className='input' type="password"/>
    <span className="focus-input" data-placeholder="Confirmar Senha"></span>
    </div>

    <div className="wrap-input">
    <input className='input' type="email"/>
    <span className="focus-input" data-placeholder="Número do distintivo"></span>
    </div>

  <div className="container-login-form-btn">
  <button className="login-form-btn">Cadastrar</button>
 </div>

 
 
    </form>
    </div>
    </div>
    </div>
    );
  
}

export default Cadastro;


  