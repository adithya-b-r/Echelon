import Slider from "../Slider"

export const NonManagement = () => {
  return (
    <div id="events" className="w-full h-[90vh] bg-transparent flex flex-col items-center justify-center scroll-mt-[10vh] relative">
      <h1
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          color: "#fff",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(0, 0, 0, 0.5)",
          WebkitTextStroke: ".5px black",
          borderRadius: "10px",
          padding: "10px 20px"
        }}
        className="tracking-widest text-4xl md:text-5xl font-bold md:w-[80%] w-[95%] text-center"
      >
        Cultural Events
      </h1>

      <Slider start={7} end={13} type={1} />
    </div>
  )
}