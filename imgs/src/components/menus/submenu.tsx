import  {useState} from 'react';
import { GrInstagram } from 'react-icons/gr';
import '../../css/menus.css';

const Submenu = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="container">
      

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"><p></p></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="/">PRODUTOS</a>
              </li>
              <li>
                <a href="/">LOJAS PRÓXIMAS</a>
              </li>
              <li>
                <a href="/">QUEM SOMOS</a>  
              </li>
              <li>
                <a href="/"><GrInstagram/>SIGA-NOS NO INSTAGRAM</a>  
              </li>
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Submenu;