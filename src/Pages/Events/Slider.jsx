import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { Modal } from '../../Components/Modal';

export default function Slider({ start = 0, end = 3, type = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const photos = [
    "ecofindvate.jpeg", "econexa.jpg", "ecoadebturex.jpeg", "ecospark.jpg", "ecoicon.jpeg",
    "ecoquest.jpeg", "ecolead.jpeg", "spectra.jpeg", "zenblaze.jpeg", "aura.jpeg",
    "hidden.jpeg", "iris.jpeg", "inequest.jpeg", "advenger.jpeg"
  ];

  const eventDetails = [
    ["ECO FINOVATE", "2", "Suneetha J - 8867648433", "Ramananda Shetty - 8088896489", "FINANCE"], //pg
    ["ECO NEXA", "2", "Saksha S - 8867341607", "Meghashree - 9353911520", "HR"], //pg
    ["ECO AdVentureX", "2", "Prajith - 8296750765", "Sneha Lunkad - 78995 49820", "MARKETING"], //pg
    ["ECO SPARK", "3", "Prathiksha Shetty - 8496016583", "Sangeetha P S - 9900687579", "SPARK TANK"], //pg
    ["ECO ICON", "1", "Harsha - 6361574092", "Minaz - 9353615484", "BEST MANAGER"], //pg & ug
    ["ECO QUEST", "2", "Nandana Ashok - 6235877850", "Aswathi T K - 9567997656", "BUSINESS QUIZ"], //pg & ug
    ["ECO LEAD", "3", "Nidhi Shetty - 6366162401", "Renita Dsouza - 9663347984", "BMT"], //pg & ug
    ["SPECTRA", "2", "Shreevatsa - 8660049762", "Sushmitha Amin - 9834063924", "BRAND RANGOLI"], //pg & ug
    ["ZENBLAZE", "4-8", "Prajna Kundar - 9110464528", "Raksha T - 9945138003", "CORPORATE WALK"], //
    ["AURA", "1", "Prakruthiji - 8277091324", "SPOT DANCE"],
    ["HIDDEN TRAIL", "2", "Akhilesh - 8105456871", "Puneeth G Mallaya - 8792009632", "TREASURE HUNT"],
    ["AD-VENGERS", "4-6", "Nishimura - 7619531629", "Shruthi - 8431742695", "MAD AD"],
    ["IRIS", "2", "Vishnu Ashok - 7034069185", "Naijin Johny - 9380727878", "PHOTOGRAPHY"],
    ["CINEQUEST", "2", "Hisham Hussain - 7338549200", "Abhin - 9731445371", "MOVIE QUIZ"],
  ];

  const openModal = (index) => {
    setSelectedEvent({
      name: eventDetails[index][0],
      category: eventDetails[index][eventDetails[index].length - 1],
      image: `/imgs/events/${photos[index]}`,
      participants: eventDetails[index][1],
      coordinators: eventDetails[index].slice(2, -1),
      index: index,
      type: type,
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
        initialSlide={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {photos.map((_, index) => (
          index >= start && index <= end && (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: '80%',
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
                  border: "3px solid rgba(212, 175, 55, 0.8)",
                  padding: '20px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className='w-24 h-24 rounded-full overflow-hidden object-cover' style={{ border: "3px solid #f5f5f5" }}>
                  <img src={`/imgs/events/${photos[index]}`} alt="" />
                </div>
                <div className='text-center mt-3'>
                  {eventDetails[index][0]} <br />
                  ({eventDetails[index][eventDetails[index].length - 1]})
                </div>

                <button
                  onClick={() => openModal(index)}
                  style={{
                    background: `linear-gradient(135deg, hsl(${210 + (index * 10) % 30}, 60%, 40%) 0%, hsl(${220 + (index * 5) % 40}, 50%, 30%) 100%)`,
                    border: "2px solid rgba(212, 175, 55, 0.8)",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#fff",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  className='hover:opacity-80'
                >
                  Read more
                </button>
              </div>
            </SwiperSlide>
          )
        ))}


      </Swiper>

      {isOpen && selectedEvent && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} event={selectedEvent} />}
    </>
  );
}