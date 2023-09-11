import "./../css/formas.css"
import { BiBody } from "react-icons/bi"
import { GiBrain, GiPunchBlast, GiUnbalanced } from "react-icons/gi"
import { RiMoneyDollarCircleLine } from "react-icons/ri"


function Formas () {
    return(
<>

<div>
      <img src="./../imgs/formas.png" className="imagem"/>
    </div>


<div className="list-violence">

<div className="contem">
<div className="content">
<div className="icon"><GiPunchBlast/></div>
<div><h2 id="cola">VIOLÊNCIA FÍSICA</h2>
<p className="nossasenhora">Entendida como qualquer conduta que ofenda a integridade ou saúde corporal da mulher.</p></div>

<div className="list">
    <ul>
        <li>Espancamento</li>
        <li>Atirar objetos, sacudir e apertar os 
        braços</li>
        <li>Estrangulamento ou sufocamento</li>
        <li>Lesões com objetos cortantes ou perfurantes</li>
        <li>Ferimentos causados por queimaduras ou armas de fogo</li>
        <li>Tortura</li>
        </ul>
        </div>
        </div>
        </div>


<div className="contem">
<div className="content">
<div className="icon"><GiBrain/></div>
<div><h2 id="cola">VIOLÊNCIA PSICOLÓGICA</h2>
<p className="nossasenhora">É considerada qualquer conduta que: cause dano emocional e diminuição da autoestima; 
prejudique e perturbe o pleno desenvolvimento da mulher; ou vise degradar ou controlar suas ações, comportamentos, 
crenças e decisões.</p></div>

<div className="list">
    <ul>
        <li>Ameaças</li>
        <li>Constrangimento</li>
        <li>Humilhação</li>
        <li>Manipulação</li>
        <li>Isolamento (proibir de estudar e viajar ou de falar com amigos e parentes)</li>
        <li>Vigilância constante</li>
        <li>Perseguição contumaz</li>
        <li>Insultos</li>
        <li>Chantagem</li>
        <li>Exploração</li>
        <li>Limitação do direito de ir e vir</li>
        <li>Ridicularização</li>
        <li>Tirar a liberdade de crença</li>
        <li>Distorcer e omitir fatos para deixar a mulher em dúvida sobre a sua memória e sanidade 
        (<i>gaslighting</i>)</li>
        </ul>
        </div>
        </div>
        </div>
        
        
<div className="contem">
<div className="content">
<div className="icon"><BiBody/></div>
<div><h2 id="cola">VIOLÊNCIA SEXUAL</h2><p className="nossasenhora">Trata-se de qualquer conduta que constranja a presenciar,a manter ou 
a participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força.</p></div>

<div className="list">
    <ul>
        <li>Estupro</li>
        <li>Obrigar a mulher a fazer atos sexuais que causam desconforto ou repulsa</li>
        <li>Impedir o uso de métodos contraceptivos ou forçar a mulher a abortar</li>
        <li>Forçar matrimônio, gravidez ou prostituição por meio de coação, chantagem, suborno ou manipulação</li>
        <li>Limitar ou anular o exercício dos direitos sexuais e reprodutivos da mulher</li>
        </ul>
        </div>
        </div>
        </div>
        
    

<div className="contem">
<div className="content">
<div className="icon"><RiMoneyDollarCircleLine/></div>
<div><h2 id="cola">VIOLÊNCIA PATRIMONIAL</h2><p className="nossasenhora">Entendida como qualquer conduta que configure retenção, 
subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e 
direitos ou recursos econômicos, incluindo os destinados satisfazer suas necessidades.</p></div>

        <div className="list">
            <ul><li>Controlar o dinheiro</li>
            <li>Deixar de pagar pensão alimentícia</li>
            <li>Destruição de documentos pessoais</li>
            <li>Furto, extorsão ou dano</li>
            <li>Estelionato</li>
            <li>Privar de bens, valores ou recursos econômicos</li>
            <li>Causar danos propositais a objetos da mulher ou dos quais ela goste</li>
            </ul>
            </div>
            </div>
            </div>



<div className="contem">
<div className="content">
<div className="icon"><GiUnbalanced/></div>
<div><h2 id="cola">VIOLÊNCIA MORAL</h2><p className="nossasenhora">É considerada qualquer conduta que configure calúnia, difamação ou 
injúria.</p></div>
<div className="list">
    <ul>
        <li>Acusar a mulher de traição</li>
        <li>Emitir juízos morais sobre a conduta</li>
        <li>Fazer críticas mentirosas</li>
        <li>Expor a vida íntima</li>
        <li>Rebaixar a mulher por meio de xingamentos que incidem sobre a sua índole</li>
        <li>Desvalorizar a vítima pelo seu modo de se vestir</li>
        </ul>
        </div>
        </div>
        </div>
        </div>

</>
    )
}

export default Formas;