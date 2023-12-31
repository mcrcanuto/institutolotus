import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";


import "./../css/maisvendidos.css"


function Card(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
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
      };
    return (
        <div className="App">
          
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
           

           
            
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <img src="./../imgs/desconto.png" className='desconto'></img>
            <h1 className='frase'>Conheça os produtos mais vendidos da loja com o melhor preço do mercado.</h1>
          

            <Carousel responsive={responsive}>
  <div className="card">
    <img src="./../imgs/1.png" className="img" alt="Base Bruna Tavares"></img>
    <h2 id='nome'>Base Bruna Tavares</h2>
    <p className="preco">R$59,90</p>
    <p>Base Matte - Tonalidade N°2 - Sensação de veludo
    <br></br><br></br>
    <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/2.png" className="img" alt="Batom Payot"></img>
    <h2 id='nome'>Batom Payot Cherry</h2>
    <p className="preco">R$19,90</p>
    <p>Efeito hidratante -  Tonalidade N° 15 - Cor Cherry
    <br></br><br></br>
         <Link to="/denuncia">
       <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/3.png" className="img" alt="Paleta de Sombra Cores Quentes e Neutras"></img>
    <h2 id='nome'>Paleta de Sombras VeraVerão</h2>
    <p className="preco">R$45,00</p>
    <p>Paleta de Sombra com Cores Quentes e Neutras
    <br></br><br></br>
        <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/4.png" className="img" alt="Kit Siage Cauterização dos Fios"></img>
    <h2 id='nome'>Kit para Cabelos Siàge</h2>
    <p className="preco">R$90,90</p>
    <p>Kit Siàge Cauterização dos Fios 
    <br></br><br></br>
        <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/5.png" className="img" alt="Creme Hidratante Nuvem"></img>
    <h2 id='nome'>Hidratante Corporal Nuvem</h2>
    <p className="preco">R$25,00</p>
    <p>Hidratação por até 14 horas -  Algodão
    <br></br><br></br>
        <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/6.png" className="img" alt="Creme Hidratante de Pitaya"></img>
    <h2 id='nome'>Hidratante Corporal de Pitaya</h2>
    <p className="preco">R$25,00</p>
    <p>Hidratação por até 14 horas -  Pitaya
    <br></br><br></br>
       <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/7.png" className="img" alt="Matizante para Cabelos Lisos"></img>
    <h2 id='nome'>Matizador Meu Liso</h2>
    <p className="preco">R$46,35</p>
    <p>Neutraliza a cor dos cabelos amarelados
    <br></br><br></br>
        <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/8.png" className="img" alt="Perfume Poison"></img>
    <h2 id='nome'>Eau de Perfum Poison</h2>
    <p className="preco">R$252,00</p>
    <p>Fragância de Ameixa, Frutos Silvestres e Anis 
    <br></br><br></br>
       <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>


  <div className="card">
    <img src="./../imgs/9.png" className="img" alt="Hidratante Labial Carmed"></img>
    <h2 id='nome'>Hidratante Labial Carmed Melancia</h2>
    <p className="preco">R$15,00</p>
    <p>Com aroma de melancia
    <br></br><br></br>
       <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/10.png" className="img" alt="Primer Facial"></img>
    <h2 id='nome'>Primer Facial Elf</h2>
    <p className="preco">R$79,90</p>
    <p>Primer hidratante facial  de longa duração
    <br></br><br></br>
       <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/11.png" className="img" alt="Sérum Facial Vitamina C"></img>
    <h2 id='nome'>Sérum Tratcta Vitamina C10</h2>
    <p className="preco">R$29,90</p>
    <p>Ação antioxidante e clareadora 
    <br></br><br></br>
       <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/12.png" className="img" alt="Máscara para Cílios"></img>
    <h2 id='nome'>Máscara para Cílios MariMaravilha</h2>
    <p className="preco">R$21,90</p>
    <p>Aumenta o volume e comprimento dos fios
    <br></br><br></br>
        <Link to="/denuncia">
        <button>Comprar Agora</button>
        </Link>
    </p>
  </div> 


  
  
</Carousel>
        </div>
    )
}

export default Card;