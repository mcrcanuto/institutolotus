import "./css/geral.css"
import "././css/editarperfil.css"





function EditarPerfil () {


    return  (
        <div className="Container">
        <div className="container-login">
        <div className="wrap-login">
        <form className="login-form">

        <span className="login-form-title1">Editar Perfil</span>
        <span className="login-form-title"></span>
        
        <span className="login-form-title">Dados Pessoais</span>
     

        <div className="wrap-input">
        <input className='input' type="name" />
        <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
        <input className='input'type="name" />
        <span className="focus-input" data-placeholder="Sobrenome"></span>
        </div>

        <div className="wrap-input">
    <input className='input' type="name" required />
    <span className="focus-input" data-placeholder="Cpf"></span>
    </div>

        <span className="login-form-title">Dados de Login</span>
      
    
        <div className="wrap-input">
        <input className='input' type="email" />
        <span className="focus-input" data-placeholder="Email"></span>
        </div>
    
        <div className="wrap-input">
        <input className='input' type="password" />
        <span className="focus-input" data-placeholder="Senha"></span>
        </div>

    
      <div className="container-login-form-btn">
      <button className="login-form-btn">Salvar Edições</button>
     </div>
    
     
     
        </form>
        </div>
        </div>
        </div>
        );
};

export default EditarPerfil;