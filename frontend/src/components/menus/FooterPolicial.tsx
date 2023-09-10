import { Link } from "react-router-dom";
import "./../../css/FooterPolicial.css"


function FooterPolicial() {
	
	return (

	

	<>
     
  
    <footer>
      
      <div className="footer-container">
        <div className="logo">INSTITUTO LÓTUS
    
</div>

        <div className="footer-top">
          

          <div className="links">
            <h3 className="services-h3"></h3>

          
            <ul>
              <li><a href="https://criarmeulink.com.br/u/1693515884">E-mail</a></li>

              <li><a href="https://api.whatsapp.com/send?phone=5524998709056&text=Pr
              eciso%20da%20ajuda%20da%20pol%C3%ADcia%20nesse%20exato%20momento!">WhatsApp Web</a></li>
            </ul>
            
     
          </div>

          <div className="links">
            <h3 className="categories-h3"></h3>

            <ul>
              

              <li><a href="Instagram.com">Instagram</a></li>

              <li><a href="X.com">Twitter  </a></li>
             
            </ul>
          </div>

          <div className="links">
            <h3 className="contact-h3"></h3>

            <ul>
            <li> <Link to="/editarperfil">Editar Meu Perfil</Link></li>

            <li><Link to="/confirmacao">Sair da minha conta </Link></li>

            </ul>
          </div>
        </div>

        <div className="footer-bottom">
         
        </div>
      </div>
    </footer>
    </>
			

			)
}

export default FooterPolicial;