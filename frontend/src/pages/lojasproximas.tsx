import Maps from "./../components/maps"
import Menu from "./../components/menus/Menu"
import Submenu from "./../components/menus/submenu"
import Footer from "./../components/menus/footer"

import React from "react"

import "./../css/lojasproximas.css"

function LojasProximas() {


  return (
    <>
    <React.Fragment>
        <Menu/>
        <Submenu/>
        </React.Fragment>
        <div id="divtitulo-maps">
        <p id="titulo-maps">Veja a Delegacia Da Mulher mais próxima de você</p>
        <br />
        </div>
        <React.Fragment>
        <Maps/>
        <Footer/>
    </React.Fragment>
     
    </>
  )
}

export default LojasProximas;
