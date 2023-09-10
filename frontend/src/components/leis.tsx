
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./../css/geral.css"
import "./../css/leis.css"




function Leis(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    return(

      <>
          <div className="row">


<div >
<h2 >Leis que protegem a mulher</h2>
<br></br>
</div>

            <div className="luisa">
          <Carousel responsive={responsive}>
<div id="cartao">
  <h2 id='h2'>Lei Carolina Dieckman</h2>
  <p className="preco">R$59,90</p>
  <p>Base Matte - Tonalidade N°2 - Sensação de veludo
  <br></br><br></br></p>
</div>

<div id="cartao">
  <h2 id='h2'>Lei Joana Maranhão</h2>
  <p className="preco">R$59,90</p>
  <p>Base Matte - Tonalidade N°2 - Sensação de veludo
  <br></br><br></br></p>
</div>

<div id="cartao">
  <h2 id='h2'>Lei do Minuto Seguinte</h2>
  <p className="preco">R$59,90</p>
  <p>Base Matte - Tonalidade N°2 - Sensação de veludo
  <br></br><br></br></p>
</div>

<div id="cartao">
  <h2 id='h2'>Lei do Feminicídio</h2>
  <p className="preco">R$59,90</p>
  <p>Base Matte - Tonalidade N°2 - Sensação de veludo
  <br></br><br></br></p>
</div>

<div id="cartao">
  <h2 id='h2'>Lei da Maria da Penha</h2>
  <p className="preco">R$59,90</p>
  <p>Base Matte - Tonalidade N°2 - Sensação de veludo
  <br></br><br></br></p>
</div>


</Carousel>
        </div>


   
		
        <br></br> <br></br> <br></br> <br></br>
        
    


  <div >
  <h2>Lei Carolina Dieckman</h2>
  <br></br>
  <h3>
Em maio de 2011, a atriz brasileira Carolina Dieckman sofreu um ataque virtual 
que culminaria na posse de 36  fotos de cunho pessoal nas mãos de um hacker. 
Exigindo uma quantia de R$ 10 mil reais para não publicar o conteúdo, o hacker teve sua proposta negada e, 
de fato, tornou públicas as imagens que tinha em sua posse.
</h3>
<br></br>
<h3>
Com esse episódio, houve um grande debate acerca de segurança no espaço virtual, o 
que motivou a criação da Lei Nº 12.737/2012, também chamada de Lei Carolina Dieckman. Esse dispositivo legal 
alterou o Código Penal Brasileiro, sendo uma das primeiras bases legais para o Direito Digital, que ainda está em 
processo de formação.
</h3>
<br></br>
<h3>
Assim, foi criado o crime de invasão de dispositivos com o objetivo de obter, adulterar, destruir ou compartilhar 
publicamente dados sem autorização do proprietário. Apesar de ser uma lei que defende igualmente homens e mulheres, 
casos de fotos de mulheres vazados para a mídia são reconhecidamente mais frequentes.
Por isso, e por sua criação ter sido motivada por um caso ocorrido como uma mulher, faz parte da lista de leis de 
proteção à mulher.
</h3>
</div>


<div>
<h2 >Lei Joana Maranhão</h2>
<br></br>
<h3>Publicada no dia 17 de maio de 2012, a Lei 12.650 alterou os 
    prazos de prescrição para casos de crimes contra a dignidade sexual de crianças e adolescentes. </h3>
<br></br>
<h3>Antes deste dispositivo legal, tais crimes eram prescritos quando a criança/adolescente atingisse 
18 anos. Ou seja: caso não fossem denunciados até então, os agressores não poderiam ser posteriormente 7
responsabilizados.</h3>
<br></br>
<h3>
A partir da Lei Joana Maranhão, as vítimas passam a ter um prazo de 20 anos para realizar a denúncia a partir 
do momento que completam 18 de anos de idade. Aumentando assim, a janela de tempo para que as famílias e 
vítimas possam buscar justiça.<br></br><br></br>
Assim como a Lei Carolina Dieckman, a Lei Joanna Maranhão foi nomeada em homenagem à uma mulher brasileira.<br></br>
Joanna, atleta e ativista, batalhou na justiça para obter um julgamento justo para o seu agressor, que na época, 
por conta das antigas leis, já tinha seus crimes prescritos.
<br></br>
</h3>
</div>


  <div >
  <h2 >Lei do Minuto Seguinte</h2>
  <br></br>
  <h3>
Um levantamento recente do Fórum Brasileiro de Segurança Pública revelou que o percentual de 
estupros de mulheres e meninas aumentou em 12,5% em 2022: 
estima-se que um crime desse tipo ocorra a cada 9 minutos no território brasileiro.</h3>
<br></br>
<h3>
A Lei do Minuto Seguinte foi criada no dia 1° de agosto de 2013 e tem como objetivo garantir o 
atendimento multidisciplinar, obrigatório e gratuito de vítimas de violência sexual pelo SUS.<br></br> <br></br>
Portanto, é considerado qualquer tipo de contato sexual que tenha ocorrido sem consentimento e não é necessária a 
apresentação de boletim de ocorrência: basta a palavra da vítima
 para que tenha acesso aos serviços em hospitais e postos de saúde do SUS. <br></br><br></br>
Em seu artigo 3°, a lei lista os serviços que devem ser oferecidos para as vítimas gratuitamente pelo SUS:
<br></br><br></br>

<ul >
    <li>diagnóstico e tratamento das lesões físicas no aparelho genital e nas demais áreas afetadas;</li>
    <br></br>
    <li> amparo médico, psicológico e social imediatos;</li>
    <br></br>
    <li>facilitação do registro da ocorrência e encaminhamento ao órgão de medicina legal e às delegacias 
        especializadas com informações que possam ser úteis à identificação do agressor e à comprovação da 
        violência sexual;</li>
        <br></br>
        <li>profilaxia da gravidez</li>
        <br></br>
        <li>profilaxia das Doenças Sexualmente Transmissíveis – DST;</li>
        <br></br>
        <li>coleta de material para realização do exame de HIV para posterior acompanhamento e terapia;</li>
        <br></br>
        <li> fornecimento de informações às vítimas sobre os direitos legais e 
            sobre todos os serviços sanitários disponíveis.</li>
</ul>

</h3>
</div>


<div>
<h2 >Lei do Feminicídio</h2>
<br></br>
<h3>
Feminicídio é o termo utilizado para definir o homicídio motivado por gênero. 
Isto é: a vítima é morta por ser mulher.<br></br> 
Essa é uma questão muito relacionada ao contexto de violência familiar e doméstica.<br></br><br></br>
No Brasil, a incidência de casos de feminicídio é alta: apenas no primeiro semestre de 2022, por exemplo, 
foram registrados cerca de 699 casos, o que na prática, significaria o assassinato de 4 mulheres por dia 
durante o período.<br></br><br></br>
A partir da publicação da Lei do Feminicídio, o crime passou a ser considerado como homicídio 
qualificado e enquadrado com um dos crimes hediondos. Com isso, as penas para os agressores são mais severas, 
ficando compreendidas entre 12 e 30 anos.<br></br><br></br> Além disso, para quem comete algum dos crimes 
hediondos não há prisão provisória e estão vetados os direitos a indulto, anistia ou graça. Ao tornar as medidas 
punitivas mais severas, espera-se que haja uma diminuição na constância de realização dos crimes no futuro.
</h3>
</div>


<div >
<h2 >Lei Maria da Penha</h2>
<br></br>
<h3>
A Lei Maria da Penha é a principal legislação brasileira para combater a 
violência contra a mulher. <br></br><br></br>
A norma é reconhecida pela ONU como uma das três melhores legislações do mundo no enfrentamento à 
violência de gênero.<br></br><br></br>
Além da Lei Maria da Penha, a Lei do Feminicídio, 
sancionada pela presidenta Dilma Rousseff em 2015, colocou a morte de mulheres no rol de crimes hediondos e 
diminuiu a tolerância nesses caso.<br></br><br></br>
Mas o que poucos sabem é que a violência doméstica vai muito além da agressão física ou do estupro.  
A Lei Maria da Penha classifica os tipos de abuso contra a mulher nas seguintes categorias: violência 
patrimonial, violência sexual, violência física, violência moral e violência psicológica.
Conheça algumas formas de agressões que são consideradas violência doméstica no Brasil:
</h3>
</div>

</div>


<br></br>

<h2 >Fonte: Ministério da Mulher</h2>		

      </>
    )
  }

  export default Leis;