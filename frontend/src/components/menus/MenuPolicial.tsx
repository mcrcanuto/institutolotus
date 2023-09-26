import  {useState} from 'react';
import {Link} from "react-router-dom"
import "./../../css/MenuPolicial.css"
import {BiLogOut} from "react-icons/bi"
import {FaRegBell} from "react-icons/fa"
import{FaUserEdit} from "react-icons/fa"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const MenuPolicial = () => {

const [taOn, setTaOn] = useState(false);
      
  return (
    <header className='oii'>
    <div className="container">
      
   
       
    <Link to="/perfilpolicial">
         <p className='IL'>INSTITUTO LÓTUS</p>
          </Link>
       
   

          

      <div className = { taOn ? 'menu-section on' : 'menu-section'} onClick={() => setTaOn(!taOn)}>
           <div className="menu-treco">
              <div className="one"><p></p></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul className='ha'>
              <li>
        
              </li>
              <li>
              <Link to="/editarperfil"><FaUserEdit className="icones"/></Link>
              </li>
              <li className='sair'>
                <Link to="/quermesmosair?"><BiLogOut className="icones"/></Link>
              </li>
              <li>
              
               <FaRegBell className="icones"/>
          
              </li>
            </ul>
          </nav>

          </div>
      
        </div>
        <br></br>
        <div id="conectadomenu">vixi</div>

      </header>

      );
      };
    
export default MenuPolicial;

