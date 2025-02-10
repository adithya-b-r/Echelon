export const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray-900 md:flex md:flex-row flex-col text-white px-6 py-10 justify-between">
      <div className="mb-7 flex gap-1">
        <div className="text-xl font-semibold capitalize leading-[5vh]">
          <img className="w-16 h-16 rounded-full" src="/imgs/sdit.png" alt="" />
        </div>

        <div>
          <p className="text-xl font-bold md:mb-4 md:mt-4 tracking-wider">Shree Devi Institute of Technology</p>
          <p className="text-sm leading-[5vh] font-semibold tracking-wider"> Airport Road, Kenjar,
            Mangalore - 574142,
            <br />Karnataka State, India.</p>
        </div>
      </div>

      <div className="flex flex-col md:w-[30%] w-[100%] md:ml-24 leading-relaxed md:text-left text-center">
        <h3 className="md:mt-4 mb-4 font-bold text-2xl">Quick Links</h3>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#home">Home</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#about">About</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#events">Events</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#rules">Rules</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#contact">Contact</a>
      </div>

      <div className="flex md:w-[33%] w-[100%] h-[30vh] bg-gray-400 rounded-lg overflow-hidden md:mt-0 mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.467602504323!2d74.83182507431643!3d12.9521038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350d45819abf1%3A0xec9cf13e2e0ad60c!2sShree%20Devi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1738907515444!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "8px", overflow: "hidden" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
