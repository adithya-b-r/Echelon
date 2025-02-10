import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export const Home = () => {
  const END_DATE = new Date("2025-02-27T00:00:00").getTime(); // Fixed end date

  return (
    <div id="home" className="w-full h-[90vh] bg-transparent flex flex-col items-center scroll-mt-[10vh]">
      <h1 className='md:text-3xl text-2xl text-white text-center leading-loose md:font-extrabold font-bold drop-shadow-2xl'>
        DEPARTMENT OF MASTER OF BUSINESS ADMINISTRATION <br />
        <span className='text-2xl font-normal md:font-semibold drop-shadow-md'>PRESENTS</span>
      </h1>


      <img className="h-[40%] w-fit brightness-125 drop-shadow-2xl mt-14 mb-16" src="imgs/logo.png" alt="" />

      <FlipClockCountdown
        to={END_DATE}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', color: "white" }}
        digitBlockStyle={{ width: 30, height: 50, fontSize: 30, backgroundColor: "white", color: "royalblue" }}
        dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: 'white', size: '6px' }}
        duration={0.5}
      >
        Completed
      </FlipClockCountdown>

      {/* <button
        onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYfzn7gJEKVF0oCa9igF8tFl7HQPALjJKyevpMxQS1ATEFzw/viewform?usp=header"}
        className="bg-blue-500 rounded-md md:w-[50%] w-[70%] h-14  text-3xl text-white mt-16 border-[1px] border-white">
        Register Now
      </button> */}

    </div>
  )
}