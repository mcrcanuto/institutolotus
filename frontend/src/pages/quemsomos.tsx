import React from "react";
import Menu from "../components/menus/Menu.tsx";
import Submenu from "../components/menus/submenu.tsx";
import Footer from "../components/menus/footer.tsx";
import {Link} from "react-router-dom";

import Zap from "../components/popup/zapzap";

import "./../css/pop.css"
import "./../css/geral.css";
import "./../css/quemsomos.css";
import { BsPatchQuestionFill, BsFillPatchExclamationFill} from "react-icons/bs"




function QuemSomos(){
 
return (
  <div id="quemsomos">

<React.Fragment>
  <Menu/>
  <Submenu/>
   <Zap/>
</React.Fragment>



      <img src="./../imgs/quemsomos.png" className="imagemquemsomos"/>



    <div className="rolar">

  <div className="coluna" >
  <h2 className="h2quemsomos"><BsPatchQuestionFill/></h2>
  <p className="pquemsomos">Você deve estar se perguntando por que não conseguiu encontrar 
nenhum produto na nossa loja, certo? Bem, a razão é simples e muito especial...
<br></br><br></br> 
Instituto Lótus é uma plataforma dedicada a proteger e 
apoiar mulheres que enfrentam situações difíceis por causa da violência de gênero em Volta Redonda - RJ. Nosso disfarce 
como uma plataforma de cosméticos é uma medida especial para garantir a segurança daqueles 
que nos procuram, especialmente as mulheres que 
vivem sob o mesmo teto que seus agressores.
<br></br><br></br>
A nossa missão é oferecer um ambiente seguro onde você possa fazer suas denúncias e 
receber o apoio que merece. Obrigado por sua compreensão e por fazer parte dessa importante iniciativa.
</p>
</div>


  <div className="coluna" >
  <h2 className="h2quemsomos"><BsFillPatchExclamationFill/></h2>
  <p className="pquemsomos">Além disso, as denúncias efetuadas aqui, vão direto para a polícia da Delegacia da Mulher da 
nossa cidade, gerando uma maior rapidez no recebimento delas, pois são eles que administram o site.</p>
<br></br>

<div className="botoes">

<h2 className="para">Para fazer uma denúncia, clique no botão abaixo:</h2>
<br></br>
      <Link to="/comprar">
      <button  className="buttonquemsomos">Fazer Pedido</button>
      </Link>
<br></br>
<h2 className="para">Para acompanhar uma denúncia já efetuada, clique no botão abaixo:</h2>
<br></br>
<button className="buttonquemsomos">Meus Pedidos</button>

</div>
  </div>




<Link to="/login" className="link">
<img src="./../imgs/entrarcomo.png" id="entrarpolicial" />
  </Link>
  <br></br><br></br>


</div>








    <React.Fragment>
  <Footer/>
</React.Fragment>


    </div>
)
}
      
    export default QuemSomos;