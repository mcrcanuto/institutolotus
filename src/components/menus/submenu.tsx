import { useState } from 'react';
import '../../App.css';
import {GrInstagram} from "react-icons/gr"


function MenuBaixo() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={handleMenuToggle}>
      ☰
      </button>
      <nav className="nav">
        
        <ul className="nav-list">
          <a href="/"><li className="nav-item">PRODUTOS</li></a>
          <a href="/"><li className="nav-item">LOJAS PRÓXIMAS </li></a>
          <a href="/"><li className="nav-item">QUEM SOMOS </li></a>
          <a href="https://www.instagram.com/">
            <li className='insta'> <GrInstagram className="instaicone"/>SIGA-NOS NO INSTAGRAM</li></a>
        </ul>
      </nav>
    </div>
  );
};
  
  export default MenuBaixo;