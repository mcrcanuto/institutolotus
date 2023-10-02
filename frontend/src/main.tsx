import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.tsx"
import Denuncia from "./pages/denuncia.tsx"
import QuemSomos from "./pages/quemsomos.tsx"
import Produtos from "./pages/produtos.tsx"
import PerfilPolicial from "./pages/perfilpolicial.tsx"
import Login from "./pages/login.tsx"
import ConfirmaSaida from "./pages/ConfirmaSaida.tsx"
import Cadastro from "./pages/cadastro.tsx"
import EditarPerfil from "./pages/editarperfil.tsx"
import ConfirmaExcluirConta from './pages/ConfirmaExcluirConta.tsx'
import MeusPedidos from "./pages/meuspedidos.tsx"
import LojasProximas from "./pages/lojasproximas.tsx"
import Atualizar from "./pages/atualizarstatus.tsx"
import Protocolo from "./pages/protocolo.tsx"
import Status from "./pages/status.tsx"
import "./css/geral.css"

import {register} from "swiper/element/bundle"


register();
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Denuncia} path="/comprar"/>
        <Route Component={QuemSomos} path="/quemsomos"/>
        <Route Component={Produtos} path="/produtos"/>
        <Route Component={Cadastro} path="/cadastro"/>
        <Route Component={EditarPerfil} path="/editarperfil"/>
        <Route Component={PerfilPolicial} path="/perfilpolicial"/>
        <Route Component={Login} path="/login"/>
        <Route Component={ConfirmaSaida} path="/quermesmosair?"/>
        <Route Component={ConfirmaExcluirConta} path="/querexcluirsuaconta?"/>
        <Route Component={MeusPedidos} path="/meuspedidos"/>
        <Route Component={LojasProximas} path="/lojasproximas"/>
        <Route Component={Atualizar} path="/atualizarstatus/:protocolo"/>
        <Route Component={Protocolo} path="/protocolo"/>
        <Route Component={Status} path="/meustatus/:protocolo"/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
