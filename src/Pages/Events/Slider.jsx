import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {

  const photos = ["ecofindvate.jpeg", "econexa.jpg", "ecoadebturex.jpeg", "ecospark.jpg", "ecoicon.jpeg", "ecoquest.jpeg", "ecolead.jpeg", "spectra.jpeg", "zenblaze.jpeg", "aura.jpeg", "hidden.jpeg", "iris.jpeg", "inequest.jpeg", "advenger.jpeg"];

  const eventName = ["ECO FINOVATE", "ECONEXA", "ECO AdVentureX", "ECO SPARK", "ECO ICON", "ECO QUEST", "ECO LEAD", "SPECTRA", "ZENBLAZE", "AURA", "HIDDEN TRAIL", "IRIS", "CINEQUEST", "AD-VENGERS"];

  const eventCat = ["FINANCE", "HR", "Marketing", "Spark Tank", "BEST MANAGER", "BUSINESS QUIZ", "BMT", "BRAND RANGOLI", "CORPORATE WALK", "SPOT DANCE", "TREASURE HUNT", "PHOTOGRAPHY", "MOVIE QUIZ", "MAD AD"];
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
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {[...Array(14)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: '80%',
                height: '100%',
                backgroundColor: `hsl(${index * 69}, 70%, 50%)`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'bold',
                borderRadius: '10px',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                border: "5px ridge white"
              }}
            >
              <div className='w-24 h-24 rounded-full bg-pink-500 overflow-hidden object-cover'>
                <img src={`/imgs/events/${photos[index]}`} alt="" />
              </div>
              <div className='text-center'>
                {eventName[index]} <br />
                ({eventCat[index]})
              </div>

              <button className='px-4 py-2 bg-purple-500 text-sm text-white font-semibold border-2 border-white capitalize rounded-lg tracking-wider '>read more</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
