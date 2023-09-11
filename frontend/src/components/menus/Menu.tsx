import { BiClipboard } from "react-icons/bi";
import {TiShoppingCart} from "react-icons/ti"
import React from "react";
import { Popup2, Popup } from "././../popup/pop";
import './../../css/pop.css'
import "../../css/menus.css";
import { Link } from "react-router-dom";


function Menu() {

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


  
  return (
    <>
      <header className="menucima" >
     
      <div>
        <Link to="/">
      <img src="./../imgs/logo.png" id="logomenu"/>
      </Link>
    </div>


          <div className="menulat">
            
      <ul>
          <li>  
          <button onClick={togglePopup} id="pedidosm">
          <BiClipboard className="iconempedido" />Meus Pedidos
          </button>
          </li>

          <li>
          <Link to="/denuncia">
          <button id="pedidosf">
          <TiShoppingCart className="iconefpedido" />Fazer Pedido
          </button>
          </Link>
          </li>
      </ul>
          </div>
      </header>

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
      )}
    </>
  );
}

export default Menu;