import './../App.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'
import blu from "./../../imgs/slide/blu.png";
import cachos from "./../../imgs/slide/cachos.png";
import sabonete from "./../../imgs/slide/sabonete.png";
import hidrata from "./../../imgs/slide/hidrata.png";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Slide() {
    const slides = {blu, cachos, sabonete, hidrata};
  
    return (
     <div className='conatainer'>
        <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        loop
        >
            {slides.map(slide => (
                <SwiperSlide>
                    <img src={slides} alt={slides}/>
                </SwiperSlide>
            ))}


        </Swiper>
     </div>
         
  
    );
  }
  
  export default Slide;