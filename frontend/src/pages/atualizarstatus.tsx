import React from "react";
import MenuPolicial from "../components/menus/MenuPolicial"
import FooterPolicial from "../components/menus/FooterPolicial";
import "./../css/atualizar.css"
import "./../css/geral.css"

import {LuSendHorizonal} from "react-icons/lu"


function Atualizar(){
return(


<>
    <React.Fragment>
    <MenuPolicial/>
    </React.Fragment>

    <br></br>

<p id="titulo-denuncia">Denúncia de Violência Física - X54POA54</p>
<p id="titulo-agressor">Agressor: Zé da Silva</p>

  <br></br><br></br>

  <p id="titulo-c-a">Comentários Antigos </p>

<div id="TelaStatus" >


    <div id="divcomentario">

        <p id="tipocoment">Denúncia em Investigação</p>
        <p id="data">Data:28/09/2023</p>
       
    <p id="coment">Você deve estar se perguntando por que não conseguiu encontrar 
nenhum produto na nossa loja, certo? Bem, a razão é simples e muito especial...
Instituto Lótus é uma plataforma dedicada a proteger e 
apoiar mulheres que enfrentam situações difíceis por causa da violência de gênero em Volta Redonda - RJ. Nosso disfarce 
como uma plataforma de cosméticos é uma medida especial para garantir a segurança daqueles 
que nos procuram, especialmente as mulheres que 
vivem sob o mesmo teto que seus agressores.
</p>

</div>
<div id="divcomentario">
        <p id="tipocoment">Denúncia Visualizada</p>
        <p id="data">Data:10/09/2023</p>
       
    <p id="coment">Você deve estar se perguntando por que não conseguiu encontrar 
nenhum produto na nossa loja, certo? Bem, a razão é simples e muito especial...
Instituto Lótus é uma plataforma dedicada a proteger e 
apoiar mulheres que enfrentam situações difíceis por causa da violência de gênero em Volta Redonda - RJ. Nosso disfarce 
como uma plataforma de cosméticos é uma medida especial para garantir a segurança daqueles 
que nos procuram, especialmente as mulheres que 
vivem sob o mesmo teto que seus agressores.
</p>

</div>

</div>


<br></br><br></br><br></br><br></br>
<form>
<label id="label-tipo-comentario">Escolha um tipo de comentário:</label>
  <select name="Comentários" id="select-tipo-comentario" required>
  <option value="Denúncia Visualizada">Denúncia Visualizada</option>
  <option value="Denúncia em investigação">Denúncia em investigação</option>
  <option value="Denúncia Finalizada">Denúncia Finalizada</option>
</select>

<br></br><br></br><br></br>

<div className="input-group-comentario mb-5">
    
  <textarea  className="form-comentario" placeholder="Escrever comentário" 
  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
  <button id="botaocomentar"><LuSendHorizonal/></button>
  </div>
  </div>
  </form>



<React.Fragment>
    <FooterPolicial/>
    </React.Fragment>
</>
        
)
}


export default Atualizar;