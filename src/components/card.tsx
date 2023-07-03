
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
            <h1></h1>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>


            <Carousel responsive={responsive}>
  <div className="card">
    <img src="./../imgs/logo.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
        <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/logo.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
        <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/logo.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
        <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/logo.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
       <button>Adicionar ao carrinho</button>
    </p>
  </div>

  
  
</Carousel>;
        </div>
    )
}

export default Card;