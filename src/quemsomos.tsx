import React from "react";
import Menu from "./components/menus/Menu";
import Submenu from "./components/menus/submenu";
import Footer from "./components/footer";
import {Link} from "react-router-dom";
import { Popup2, Popup } from "./components/popup/pop.tsx";



import "./css/pop.css"
import "./css/geral.css";
import "./css/quemsomos.css";




function QuemSomos(){

    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
  
    const Exit = () => {
      setIsOpen(false);
      setIsOpen2(false);
  
    }
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
      setIsOpen2(false);
  
    }
    const togglePopup2 = () => {
      setIsOpen2(!isOpen2);
      setIsOpen(!isOpen);
  
      console.log("Ta indo");
  
  
  
    
  }

  
   
      return(

        <div>
      	<React.Fragment>
			<Menu/>
			<Submenu/>
            </React.Fragment>
            <h1>QUEM SOMOS?</h1>
            <h2>Você provavelmente está se perguntando por que não conseguiu comprar nenhum produto da 
                nossa loja...<br></br>
Isso aconteceu porque somos uma pseudo plataforma de cosméticos veganos. 
</h2>
<br></br>
<h1>
MAS COMO ASSIM PSEUDO PLATAFORMA?
</h1>
<h2>
Na verdade, Instituto Lótus é uma plataforma de denúncias de violência contra a mulher na 
cidade de Volta Redonda. Todo esse disfarce foi desenvolvido para maior segurança do denunciante, 
principalmente para as mulheres que moram na mesma residência que seu agressor.
</h2>
<br></br>
<h2>
Além disso, as denúncias efetuadas aqui, vão direto para a polícia da Delegacia da Mulher da 
nossa cidade, gerando uma maior rapidez no recebimento delas, pois são eles que administram o site.
</h2>
<br></br>
<h2>Para fazer uma denúncia, clique no botão abaixo:</h2>

                  <Link to="/denuncia">
                  <button  id="buttonp">Fazer Pedido</button>
                  </Link>

<h2>Para acompanhar uma denúncia já efetuada, clique no botão abaixo:</h2>

<button onClick={togglePopup} id="buttonp">Meus Pedidos</button>
	
{isOpen && (
        <Popup2
          handleClose={togglePopup}
          content={
            <div>
              <h3>Insira o número de protocolo vinculado a sua denúncia</h3>
              <input
                id="protocolo"
                type="text"
                maxLength={15}
                autoFocus
              ></input>
              <br></br>
              <button onClick={togglePopup2} id="proc">
                PROCURAR
              </button>
            </div>
          }
        />
      )}
      {isOpen2 && (
        <Popup
          handleClose={Exit}
          content={
            <div>
              <h2>DENÚNCIA: XXXXXXXXXXXXXXX</h2>
              <h1 id="p1">STATUS DA DENÚNCIA</h1>
              <p>resultado</p>
              <h1>POLICIAL RESPONSÁVEL</h1>
              <p>resultado</p>
              <h1>NÚMERO DO DISTINTIVO</h1>
              <p>resultado</p>
              <h1 id="p2">ATUALIZAÇÕES</h1>
              <p>resultado</p>
              <div>
                <h2>DENÚNCIA: XXXXXXXXXXXXXXX</h2>
                <h1 id="p1">STATUS DA DENÚNCIA</h1>
                <p>resultado</p>
                <h1>POLICIAL RESPONSÁVEL</h1>
                <p>resultado</p>
                <h1>NÚMERO DO DISTINTIVO</h1>
                <p>resultado</p>
                <h1 id="p2">ATUALIZAÇÕES</h1>
                <p>resultado</p>
              </div>
            </div>
          }
        />
      )};
   



		<React.Fragment>
        <Footer/>
        </React.Fragment>
   </div>
      )}
      
    export default QuemSomos;