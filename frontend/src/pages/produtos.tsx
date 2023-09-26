
import React from "react";
import Menu from "../components/menus/Menu";
import Submenu from "../components/menus/submenu";
import Formas from "../components/formas";
import Leis from "./../components/leis"
import Footer from "../components/menus/footer";
import "./../css/geral.css"
import Zap from "../components/popup/zapzap";

function Produtos(){
    
    return(

      <>
      	<React.Fragment>
			      <Menu/>
			     <Submenu/>
           <Zap/>
            <Formas/>
            <Leis/>
            <Footer/>
        </React.Fragment>
   
      </>
    )
  }

  export default Produtos;