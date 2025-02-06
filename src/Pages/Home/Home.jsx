import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export const Home = () => {
  const END_DATE = new Date("2025-02-27T00:00:00").getTime(); // Fixed end date

  return (
    <div id="home" className="w-full h-[90vh] bg-transparent flex flex-col items-center scroll-mt-[10vh]">
      <img className="h-[40%] w-fit brightness-125 drop-shadow-lg mt-14 mb-16" src="imgs/logo.png" alt="" />

      <FlipClockCountdown
        to={END_DATE}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
        digitBlockStyle={{ width: 30, height: 50, fontSize: 30, backgroundColor: "white", color: "royalblue", border: "1px solid black" }}
        dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: 'white', size: '6px' }}
        duration={0.5}
      >
        Completed
      </FlipClockCountdown>

      <button className="bg-blue-500 rounded-md md:w-[50%] w-[70%] h-12 font-gochi text-3xl text-white mt-16">
        Register Now
      </button>
    </div>
  )
}