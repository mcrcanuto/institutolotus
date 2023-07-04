import "./../css/slides.css"

import {Swiper, SwiperSlide} from "swiper/react"

function Slide2(){

const data = [
  {id: "1", image:"./../imgs/slide/blu.png"},
  {id: "2", image:"./../imgs/slide/cachos.png"},
  {id: "3", image:"./../imgs/slide/hidrata.png"},
  {id: "4", image:"./../imgs/slide/sabonete.png"},
  {id: "5", image:"./../imgs/slide/sabonete.png"},
  {id: "6", image:"./../imgs/slide/sabonete.png"},
  {id: "7", image:"./../imgs/slide/sabonete.png"},
  {id: "8", image:"./../imgs/slide/sabonete.png"},
]



  return(
    <div className="container2">
      <Swiper
      slidesPerView={3}
      pagination={{clickable: true}}
      navigation
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