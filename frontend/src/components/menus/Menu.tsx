import { BiClipboard} from "react-icons/bi";
import {TiShoppingCart} from "react-icons/ti"
import './../../css/pop.css'
import "../../css/menus.css";
import { Link, useNavigate } from "react-router-dom";


function Menu() {  
  const navigate = useNavigate();
  return (
    <>
      <header className="menucima" >
     
      <div>
        <Link to="/">
      <img src="./../imgs/logo.png" id="logomenu"/>
      </Link>
    </div>



    <div className="placeholdermenu">
          <input type="text" placeholder="O que você procura? "/>
    </div>


          <div className="menulat">
            
      <ul>

      <li className="marginli">
        
          <button id="pedidosm" onClick={() => {navigate("/meuspedidos")}}>
          <BiClipboard className="iconempedido" />Meus Pedidos
          </button>
        
          </li>


          <li className="marginli">
          <button id="pedidosf" onClick={() => {navigate("/comprar")}}>
          <TiShoppingCart className="iconefpedido" />Fazer Pedido
          </button>
          </li>

      </ul>
          </div> 
      </header>
    </>
  )
  }


export default Menu;