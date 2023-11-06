import  {useState} from 'react';
import '../../css/menus.css';
import {Link} from "react-router-dom"

const Submenu = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="containerprincipal">
      

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"><p></p></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
              <Link to="/produtos">PRODUTOS</Link>
              </li>
              <li>
                <Link to="/lojasproximas">
                LOJAS PRÓXIMAS
                </Link>
                </li>


              <li>
              <Link to="/quemsomos">QUEM SOMOS</Link> 
              </li>
              <li>
                <a href="/">SIGA-NOS NO INSTAGRAM</a>  
              </li>
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Submenu;