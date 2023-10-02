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
        nome : getPolicial.pol_nome,
        sobreNome : getPolicial.pol_sobrenome,
        cpf : getPolicial.pol_cpf,
        email : getPolicial.pol_email,
        senha : getPolicial.pol_senha
      }))
    }, [getPolicial])

    async function updatePolicial() {
      let data;
      if (polUpdate.senha == getPolicial.pol_senha || polUpdate.senha == "") {
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
        Authorization : "Bearer " + localStorage.getItem("token")
      }}).then((res) => {
        setGet(res.data[0]);
      }).catch((error) => {
        console.log(error);
      })
    }

    function reverterMudanças() {
      setPolUpdate({
        nome : getPolicial.pol_nome,
        sobreNome : getPolicial.pol_sobrenome,
        cpf : getPolicial.pol_cpf,
        email : getPolicial.pol_email,
        senha : getPolicial.pol_senha,
      })
    }




    return  (
<>

<React.Fragment>
  <MenuPolicial/>
</React.Fragment>

<br></br><br></br>

<div className="rolarpolicial">

<div className="colunapolicial" >
  <h2 className="minhaconta">Minha Conta</h2>
  <div className="rowminhaconta">
  <div className="wrap-editar-esquerda">
    <br></br>
<p id="nomesobrenome">{`${getPolicial.pol_nome} ${getPolicial.pol_sobrenome}`}</p>
<br></br>
<p id="editar-email">Email: {getPolicial.pol_email}</p>
<br ></br>
<p id="editar-email"> CPF:{getPolicial.pol_cpf}</p>
<br></br>

<p id="editar-den-andamento"> {getPolicial.pol_den_andamento || ""} Denúncias em Andamento</p>

<p id="editar-den-finalizada">{getPolicial.pol_denF || ""} Denúncias Finalizadas</p>

<br></br>

<span className="focus-input"></span>
</div>
  </div>

</div>


<div className="colunapolicial" >
  <h2 className="editarinfo">Editar Informações </h2>
  <div className="roweditarinfo">
     
  <div className="wrap-editar-direita">

   
<form className="login-form">

      
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
<button className="salvar"  onClick={updatePolicial}>Salvar Edições</button>

<button className="cancelar" type="reset" onClick={reverterMudanças}>Cancelar</button>

<Link to="/querexcluirsuaconta?">
<button className="apagar" >Apagar Conta</button>
</Link>

</div>


</form>

   
</div>
</div>
</div>
</div>





  <React.Fragment>
  <FooterPolicial/>
</React.Fragment>

        </>
          );
};

export default EditarPerfil;