// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <img src="./../imgs/slide/blu" alt="Logo" className="" /></SwiperSlide>
      <SwiperSlide> <img src="./../imgs/slide/cachos" alt="Logo" className="" /></SwiperSlide>
      <SwiperSlide> <img src="./../imgs/slide/hidrata" alt="Logo" className="" /></SwiperSlide>
      <SwiperSlide> <img src="./../imgs/slide/sabonete" alt="Logo" className="" /></SwiperSlide>
      ....
    </Swiper>
  );
};