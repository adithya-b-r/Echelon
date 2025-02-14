import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export const Extra = () => {
  const photos = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg",
    "img10.jpeg",
    "img11.jpeg",
    "img12.jpeg",
    "img13.jpeg",
    "img14.jpeg",
  ];

  return (
    <div id="extra" className="w-full h-fit bg-transparent flex flex-col items-center scroll-mt-[10vh] my-10">
      <h1
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          color: "#fff",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(0, 0, 0, 0.5)",
          WebkitTextStroke: ".5px royalblue",
          borderRadius: "10px",
          padding: "10px 20px"
        }}
        className="tracking-widest text-4xl md:text-5xl font-bold md:w-[80%] w-[95%] text-center"
      >
        Glimpse Of Echelon'24
      </h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={6}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {photos.map((_, index) => (
          (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, hsl(${210 + (index * 15) % 30}, 50%, 30%) 0%, hsl(${220 + (index * 10) % 40}, 40%, 20%) 100%)`,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  color: '#f5f5f5',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  borderRadius: '12px',
                  flexDirection: 'column',
                  border: "3px solid #fff",
                  overflow: 'hidden',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className='w-full h-full overflow-hidden'>
                  <img
                    src={`/extra/imgs/${photos[index]}`}
                    alt=""
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        ))}
      </Swiper>

    </div>
  )
}