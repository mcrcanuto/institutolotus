import { useState } from 'react';
import '././css/cadastro.css'
import axios from 'axios'


function Cadastro () {

  const {post, setPost} = useState({
    pol_nome:'',
    pol_sobrenome:'',
    pol_email:'',
    pol_cpf:'',
    pol_senha:'',
  })

const handleInput = (event) => {
setPost({...post, [event.target.name]: event.target.value
})
}

function handleSubmit(event){
  event.preventDeafult()
  axios.post('/policial, controllersPolicial.criarPolicial', {post})
  .then(response => console.log(response))
  .catch(err => console.log(err))
}
  return  (

    <div className="Container">
    <div className="container-login">
    <div className="wrap-login">
    <form className="login-form" onSubmit={handleSubmit}>
    <span className="login-form-title">Cadastrar Conta</span>
    <span className="login-form-title">
    
    </span>
    
    <div className="wrap-input">
    <input className='input' type="name" required onChange={handleInput}/>
    <span className="focus-input" data-placeholder="Nome"  ></span>
    </div>
    <div className="wrap-input">
    <input className='input'type="name" required onChange={handleInput}/>
    <span className="focus-input" data-placeholder="Sobrenome"></span>
    </div>

    <div className="wrap-input">
    <input className='input' type="email" required onChange={handleInput}/>
    <span className="focus-input" data-placeholder="Email"></span>
    </div>

    <div className="wrap-input">
    <input className='input' type="name" required onChange={handleInput}/>
    <span className="focus-input" data-placeholder="Cpf"></span>
    </div>

    <div className="wrap-input" >
    <input className='input' type="password" required onChange={handleInput}/>
    <span className="focus-input" data-placeholder="Senha"></span>
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


  