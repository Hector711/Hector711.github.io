import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function CarouselProject({ projectImages }) {
  return (
    <Swiper
      speed={3000}
      spaceBetween={25}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Navigation]}
      className='myProjectSwiper'
    >
      {projectImages.map(({ image }, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
