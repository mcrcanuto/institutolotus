import "./../../css/slides.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Slide2(){

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
  




  return(
    
     <>
      <h1 id="cuide">Cuide de si, cuide do seu corpo e realce a sua beleza. 
      <br></br>
      Na nossa loja de cosméticos, você encontrará tudo o que precisa!
      </h1>

<br></br>

      <h1 id="conheca">CONHEÇA AS NOSSAS NOVIDADES </h1>
      <br></br>
      
      <Carousel responsive={responsive}>
  <div className="cardswiper">
    <img src="./../imgs/carousel/1.png" className="img" alt="Base Bruna Tavares"></img>
  </div>

  <div className="cardswiper">
  <img src="./../imgs/carousel/2.png" className="img" alt="Batom Payot"></img>
  </div>

  <div className="cardswiper">
    <img src="./../imgs/carousel/3.png" className="img" alt="Batom Payot"></img>
  </div>

  <div className="cardswiper">
  <img src="./../imgs/carousel/4.png" className="img" alt="Batom Payot"></img>
  </div>

  <div className="cardswiper">
  <img src="./../imgs/carousel/5.png" className="img" alt="Batom Payot"></img>
  </div>

  <div className="cardswiper">
  <img src="./../imgs/carousel/6.png" className="img" alt="Batom Payot"></img>
  </div>

  <div className="cardswiper">
  <img src="./../imgs/carousel/7.png" className="img" alt="Batom Payot"></img>
  </div>

  <div className="cardswiper">
  <img src="./../imgs/carousel/8.png" className="img" alt="Batom Payot"></img>
  </div>

  </Carousel>

      <h1 id="mantenha">Mantenha-se radiante o dia todo com as novidades da loja. 
              <br></br>E comprando pelo WhatsApp, você ganha 10% de desconto na sua primeira compra!</h1>
      <br></br>
   </>

  )
}



export default Slide2;

