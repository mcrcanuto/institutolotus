import "./../css/slides.css"

import {Swiper, SwiperSlide} from "swiper/react"

function Slide2(){

const data = [
  {id: "1", image:"./../imgs/carousel/1.png"},
  {id: "2", image:"./../imgs/carousel/2.png"},
  {id: "3", image:"./../imgs/carousel/3.png"},
  {id: "4", image:"./../imgs/carousel/4.png"},
  {id: "5", image:"./../imgs/carousel/5.png"},
  {id: "6", image:"./../imgs/carousel/6.png"},
  {id: "7", image:"./../imgs/carousel/7.png"},
  {id: "8", image:"./../imgs/carousel/8.png"},
  {id: "8", image:"./../imgs/carousel/9.png"},
]



  return(
    <div className="container2" >
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p><br></br></p>
      <p><br></br></p>
      <p><br></br></p>
      
      
      <h1>CONHEÇA AS NOSSAS NOVIDADES </h1>
      
      <Swiper
      slidesPerView={3}
      pagination={{clickable: true}}
      navigation
      loop={true}
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id} >
            <img
            src={item.image}
            alt="Slider2"
            className="slide-item2"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}



export default Slide2;

