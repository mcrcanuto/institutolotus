
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
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <p className='pbranco'>.</p>
            <h1>OS PRODUTOS MAIS VENDIDOS COM O MELHOR PREÇO</h1>
          

            <Carousel responsive={responsive}>
  <div className="card">
    <img src="./../imgs/1.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
        <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/2.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
        <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/3.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
        <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/4.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
       <button>Adicionar ao carrinho</button>
    </p>
  </div>

  <div className="card">
    <img src="./../imgs/l.png" className="img" alt="imagem de produto"></img>
    <h2>Nome do Produto</h2>
    <p className="preco">R$100,00</p>
    <p>descricao do produto
       <button>Adicionar ao carrinho</button>
    </p>
  </div>

  
  
</Carousel>
        </div>
    )
}

export default Card;