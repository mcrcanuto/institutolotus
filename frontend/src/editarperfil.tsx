import "./css/geral.css"
import "././css/editarperfil.css"
import axios from 'axios'
import {useState, useEffect} from 'react'




function EditarPerfil () {

  const {post, setPost} = useState({
    pol_nome:'',
    pol_sobrenome:'',
    pol_email:'',
    pol_cpf:'',
    pol_senha:'',
  })

  useEffect({} => {
    axios.get('/policial, controllersPolicial.criarPolicial/]').then (res => console.log(res.data))
  }, [])

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value
    })
    }
    function handleSubmit(event){
      event.preventDefault()
      axios.put("/policial/:cpf, controllersPolicial.atualizarPolicial", {post})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
    return  (
        <div className="Container">
        <div className="container-login">
        <div className="wrap-login">
        <form className="login-form" onSubmit={handleSubmit}>

        <span className="login-form-title1">Editar Perfil</span>
        <span className="login-form-title"></span>
        
        <span className="login-form-title">Dados Pessoais</span>
     

        <div className="wrap-input">
        <input className='input' type="name" onChange={handleInput}/>
        <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
        <input className='input'type="name" onChange={handleInput}/>
        <span className="focus-input" data-placeholder="Sobrenome"></span>
        </div>

        <div className="wrap-input">
    <input className='input' type="name" required onChange={handleInput}/>
    <span className="focus-input" data-placeholder="Cpf"></span>
    </div>

        <span className="login-form-title">Dados de Login</span>
      
    
        <div className="wrap-input">
        <input className='input' type="email" onChange={handleInput}/>
        <span className="focus-input" data-placeholder="Email"></span>
        </div>
    
        <div className="wrap-input">
        <input className='input' type="password" onChange={handleInput}/>
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