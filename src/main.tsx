import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.tsx'
import './index.css'


import {register} from "swiper/element/bundle"

register();
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
