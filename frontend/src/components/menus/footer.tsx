import { Link } from "react-router-dom";
import "./../../css/footer.css"
import {GrInstagram} from "react-icons/gr"
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"


function FooterPolicial() {
	
	return (

	

	<>
     
  
    <footer className="footer">
      
      <div className="footerh-container">
        <div className="logoh">INSTITUTO LÓTUS</div>

        <div className="footerh-top">
          

          <div id="linksp">
            <h3 className="services-h3h"></h3>

          
            <ul className="ul">
            <li><Link to="/produtos">PRODUTOS</Link></li>
           <li> <Link to="/">LOJAS PRÓXIMAS</Link></li>
           <li><Link to="/QuemSomos">QUEM SOMOS</Link></li>
            
     </ul>
          </div>

          <div className="linksh">
            <h3 className="categories-h3h"></h3>

            <ul className="ul">
              
            <li><h3>REDES SOCIAIS</h3></li>
            
              <li>
              <a id="ponto">.................</a>
                <a href="faceboock.com"><BsFacebook/></a>
              <a id="ponto">...</a>
              <a href="https://www.instagram.com/carla_da_silva98/"><GrInstagram/></a>
              <a id="ponto">...</a>
            <a href=""><BsWhatsapp/></a>
             <a id="ponto">...</a>
             <a href=""><BsTwitter/></a></li>

            </ul>
          </div>
        </div>

        <div className="footerh-bottom">
          <div className="socialh">
            <a href="#">
              <img src="images/facebook-icon.png" alt="" />
            </a>

            <a href="#">
              <img src="images/twtter-icon.png" alt="" />
            </a>

            <a href="#">
              <img src="images/dribbble-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
			

			)
}

export default FooterPolicial;