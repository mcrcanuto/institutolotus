import React from "react";
import Menu from "../components/menus/Menu.tsx";
import Submenu from "../components/menus/submenu.tsx";
import Footer from "../components/menus/footer.tsx";
import {Link} from "react-router-dom";



import "./../css/pop.css"
import "./../css/geral.css";
import "./../css/quemsomos.css";




function QuemSomos(){
 
return (
  <>

<React.Fragment>
  <Menu/>
  <Submenu/>
</React.Fragment>



<h2>Você provavelmente está se perguntando por que não conseguiu comprar nenhum produto da 
    nossa loja...
Isso aconteceu porque somos uma pseudo plataforma de cosméticos veganos. 
</h2>

<h1>
MAS COMO ASSIM PSEUDO PLATAFORMA?
</h1>
<h2>
Na verdade, Instituto Lótus é uma plataforma de denúncias de violência contra a mulher na 
cidade de Volta Redonda. Todo esse disfarce foi desenvolvido para maior segurança do denunciante, 
principalmente para as mulheres que moram na mesma residência que seu agressor.
</h2>

<h2>
Além disso, as denúncias efetuadas aqui, vão direto para a polícia da Delegacia da Mulher da 
nossa cidade, gerando uma maior rapidez no recebimento delas, pois são eles que administram o site.
</h2>


<div className="botoes">

<h2>Para fazer uma denúncia, clique no botão abaixo:</h2>

      <Link to="/denuncia">
      <button  id="buttonp">Fazer Pedido</button>
      </Link>

<h2>Para acompanhar uma denúncia já efetuada, clique no botão abaixo:</h2>

<button id="buttonp">Meus Pedidos</button>

</div>






    <React.Fragment>
  <Footer/>
</React.Fragment>


    </>
)
}
      
    export default QuemSomos;