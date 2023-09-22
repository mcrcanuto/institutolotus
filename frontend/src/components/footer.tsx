import "../css/footer.css"
import "../css/geral.css"
import {Link} from "react-router-dom"


function Footer () {
    return(
        <div className="footerdiv">
         <nav>
            <ul>
              <li>
              <Link to="/produtos">PRODUTOS</Link>
              </li>
              <li>
                <a href="/">LOJAS PRÓXIMAS</a>
              </li>
              <li>
              <Link to="/quemsomos">QUEM SOMOS</Link> 
              </li>
              <li>
                <a href="/">SIGA-NOS NO INSTAGRAM</a>  
              </li>
            </ul>
          </nav>
          <a href="http://127.0.0.1:5173/">
            <img src="./../imgs/logo.png" alt="Logo" className="logoimgfooter"  />
          </a>
        </div>
    )
};

export default Footer;