import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// For Video Mute/Unmuting.
import { useRef } from "react";

export const Extra = () => {
  const photos = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
  ];

  const videoRefs = [useRef(null), useRef(null)];

  const toggleMute = (index) => {
    videoRefs.forEach((ref, i) => {
      if (ref.current) {
        if (i === index) {
          ref.current.muted = !ref.current.muted;
        } else {
          ref.current.muted = true;
        }
      }
    });
  };

  return (
    <div id="extra" className="w-full h-fit flex flex-col items-center scroll-mt-[10vh] my-10 bg-gray-900 bg-opacity-30">
      <div className="flex flex-col justify-center items-center gap-6 p-4 w-full max-w-screen-xl mx-auto mb-8">
        <h1
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
            color: "#fff",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
            WebkitTextStroke: "0.8px royalblue",
            borderRadius: "12px",
            padding: "12px 40px"
          }}
          className="tracking-wide text-4xl sm:text-4xl md:text-5xl font-bold w-auto text-center flex flex-nowrap items-center justify-center gap-3 px-6"
        >
          Featuring
          <img src="/extra/RATHAN_LOGO.png" className="h-10 sm:h-12 md:h-14 w-auto" alt="Rathan Logo" />
        </h1>

        <video
          src="/extra/videos/Rathan.mp4"
          className="w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[100%] h-auto rounded-lg shadow-lg object-cover"
          ref={videoRefs[0]}
          onClick={() => toggleMute(0)}
          playsInline autoPlay loop muted
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-6 p-4 w-full max-w-screen-xl mx-auto mb-8">
        <h1
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
            color: "#fff",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(0, 0, 0, 0.5)",
            WebkitTextStroke: ".5px royalblue",
            borderRadius: "10px",
            padding: "10px 20px"
          }}
          className="tracking-tighter text-[2.2rem] md:text-5xl font-bold md:w-[80%] w-[100%] text-center leading-snug"
        >
          Dancing Sensation
          Kaushik Suvarna
        </h1>

        <video
          src="/extra/videos/Kaushik.mp4"
          className="w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[100%] h-auto rounded-lg shadow-lg object-cover"
          ref={videoRefs[1]}
          onClick={() => toggleMute(1)}
          playsInline autoPlay loop muted
        />
      </div>

      <div className="w-full flex items-center justify-center text-center bg-gray-900 bg-opacity-20 md:h-52 h-32 mb-10">
        <button
          onClick={() =>
            (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYfzn7gJEKVF0oCa9igF8tFl7HQPALjJKyevpMxQS1ATEFzw/viewform?usp=header")}
          className="bg-blue-500 rounded-md md:w-[50%] w-[70%] h-14 text-3xl text-white border-[1px] border-white shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all duration-300">
          Register Now
        </button>
      </div>


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
        Glimpse Of Echelon
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