import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { Modal } from '../../Components/Modal';

export default function Slider() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const photos = [
    "ecofindvate.jpeg", "econexa.jpg", "ecoadebturex.jpeg", "ecospark.jpg", "ecoicon.jpeg",
    "ecoquest.jpeg", "ecolead.jpeg", "spectra.jpeg", "zenblaze.jpeg", "aura.jpeg",
    "hidden.jpeg", "iris.jpeg", "inequest.jpeg", "advenger.jpeg"
  ];

  const eventName = [
    "ECO FINOVATE",
    "ECONEXA",
    "ECO AdVentureX",
    "ECO SPARK",
    "ECO ICON",
    "ECO QUEST",
    "ECO LEAD",
    "SPECTRA",
    "ZENBLAZE",
    "AURA",
    "HIDDEN TRAIL",
    "IRIS",
    "CINEQUEST",
    "AD-VENGERS"
  ];

  const eventDetails = [
    ["ECO FINOVATE", "2", "Suneetha J - 8867648433", "Ramananda Shetty - 8088896489"],
    ["ECO NEXA", "2", "Saksha S - 8867341607", "Meghashree - 9353911520"],
    ["ECO AdVentureX", "2", "Prajith - 8296750765", "Sneha Lunkad - 78995 49820"],
    ["ECO SPARK", "3", "Prathiksha Shetty - 8496016583", "Sangeetha P S - 9900687579"],
    ["ECO ICON", "1", "Harsha - 6361574092", "Minaz - 9353615484"],
    ["ECO QUEST", "2", "Nandana Ashok - 6235877850", "Aswathi T K - 9567997656"],
    ["ECO LEAD", "3", " Nidhi Shetty - 6366162401", "Renita Dsouza - 9663347984"],
    ["SPECTRA", "2", "Shreevatsa - 8660049762", "Sushmitha Amin - 9834063924"],
    ["ZENBLAZE", "4-8", "Prajna Kundar - 9110464528", "03 AURA Raksha T - 9945138003"],
    ["AURA", "1", "Prakrithiji - 8277091324"],
    ["HIDDEN TRAIL", "2", "Akhilesh - 8105456871", "Puneeth G Mallaya - 8792009632"],
    ["IRIS", "2", "Vishnu Ashok- 7034069185", "Naijin Johny- 9380727878"],
    ["CINEQUEST", "2", "Hisham Hussain - 7338549200", "Abhin- 9731445371"],
    ["AD-VENGERS", "4-6", "Nishimura - 7619531629", "Shruthi - 8431742695"],
  ];

  const eventCat = [
    "FINANCE", "HR", "Marketing", "Spark Tank", "BEST MANAGER",
    "BUSINESS QUIZ", "BMT", "BRAND RANGOLI", "CORPORATE WALK", "SPOT DANCE",
    "TREASURE HUNT", "PHOTOGRAPHY", "MOVIE QUIZ", "MAD AD"
  ];

  const openModal = (index) => {
    setSelectedEvent({
      name: eventName[index],
      category: eventCat[index],
      image: `/imgs/events/${photos[index]}`,
      participants: eventDetails[index][1],
      coordinators: eventDetails[index].slice(2)
    });
    setIsOpen(true);
  };


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
        {photos.map((_, index) => (
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
              <div className='w-24 h-24 rounded-full bg-pink-500 overflow-hidden object-cover' style={{ border: "#fff ridge 4px" }}>
                <img src={`/imgs/events/${photos[index]}`} alt="" />
              </div>
              <div className='text-center'>
                {eventName[index]} <br />
                ({eventCat[index]})
              </div>

              <button
                onClick={() => openModal(index)}
                style={{ backgroundColor: `hsl(${index * 50}, 70%, 50%)` }}
                className='px-4 py-2 text-sm text-white font-semibold border-2 border-white capitalize rounded-lg tracking-wider'
              >
                Read more
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && selectedEvent && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} event={selectedEvent} />}
    </>
  );
}
