import "./../css/slides.css"

import {Swiper, SwiperSlide} from "swiper/react"

function Slide(){

const data = [
  {id: "1", image:"./../imgs/slide/blu.png"},
  {id: "2", image:"./../imgs/slide/cachos.png"},
  {id: "3", image:"./../imgs/slide/hidrata.png"},
  {id: "4", image:"./../imgs/slide/sabonete.png"},
]



  return(
    <div className="container">
      <Swiper
      slidesPerView={1}
      pagination={{clickable: true}}
      navigation
      loop={true}
      speed={3000}
      autoplay
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id} >
            <img
            src={item.image}
            alt="Slider"
            className="slide-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slide;