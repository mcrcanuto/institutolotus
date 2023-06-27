import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {Navigation} from "swiper"
import "swiper/css/navigation"

import styles from "../../css/Home.module.scss"

export default function Swiper(){
    return (
        <div className="div">
            <Swiper
            modules={[Navigation]}
            navigation
            speed={800}
            slidesPerView={1}
            loop
            className="myswiper"
            >
                <SwiperSlide className="slide">
                    <img src="../imgs/slide/blu.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src="../imgs/slide/cachos.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src="../imgs/slide/hidrata.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src="../imgs/slide/sabonete.png" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}