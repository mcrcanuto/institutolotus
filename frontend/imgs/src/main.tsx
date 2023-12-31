import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home.tsx"
import Denuncia from "./denuncia"
import './index.css'


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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
