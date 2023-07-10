import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home.tsx"
import Denuncia from "./denuncia"
import QuemSomos from "./quemsomos.tsx"
import Produtos from "./produtos.tsx"
import "./css/geral.css"


import {register} from "swiper/element/bundle"

const router = createBrowserRouter([
  {
    path:"/",
  element: <Home/>
},

{
  path:"/",
element: <Denuncia/>
},
{
  path:"/",
element: <QuemSomos/>
},
{
  path:"/",
element: <Produtos/>
},
])

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
        <Route Component={Denuncia} path="/denuncia"/>
        <Route Component={QuemSomos} path="/quemsomos"/>
        <Route Component={Produtos} path="/produtos"/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
