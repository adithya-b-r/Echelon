import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={6}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: '80%',
                height: '100%',
                backgroundColor: `hsl(${index * 40}, 70%, 50%)`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'bold',
                borderRadius: '10px',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-evenly',
                border:"5px ridge white"
              }}
             

            >
              <div className='w-20 h-20 rounded-full bg-pink-500'></div>
              <div className='text-center'>
              Slide {index + 1} <br />
              [event{index+1}]
              </div>
            
              <button className='px-4 py-2 bg-purple-500 text-sm text-white font-semibold border-2 border-white capitalize rounded-lg tracking-wider '>read more</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
