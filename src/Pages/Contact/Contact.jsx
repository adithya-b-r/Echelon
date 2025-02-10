export const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full bg-gray-900 md:flex md:flex-row flex-col text-white px-6 py-10 justify-between">
        <div className="md:mb-0 mb-5 flex flex-col md:w-[30%] w-[100%] md:ml-24 leading-loose text-center md:text-left">
          <h3 className="md:mt-4 mb-4 font-bold text-2xl capitalize">Connect with us</h3>

          <a href="https://sdit.ac.in/" className="inline-flex items-center justify-center md:justify-start gap-1 tracking-wide hover:text-blue-500 transition-all duration-300 text-lg font-semibold py-1">
            <i className="text-xl bx bx-globe"></i> SDIT Official
          </a>

          <a href="https://www.instagram.com/echelon_2025/" className="inline-flex items-center justify-center md:justify-start gap-1 tracking-wide hover:text-blue-500 transition-all duration-300 text-lg font-semibold py-1">
            <i className="text-xl bx bxl-instagram"></i> echelon_2025
          </a>

          <a href="https://www.instagram.com/sdit_mba_official/" className="inline-flex items-center justify-center md:justify-start gap-1 tracking-wide hover:text-blue-500 transition-all duration-300 text-lg font-semibold py-1">
            <i className="text-xl bx bxl-instagram"></i> sdit_mba_official
          </a>

          <a href="https://www.facebook.com/SDITMBA/" className="inline-flex items-center justify-center md:justify-start gap-1 tracking-wide hover:text-blue-500 transition-all duration-300 text-lg font-semibold py-1">
            <i className="text-xl bx bxl-facebook-circle"></i> SDIT MBA
          </a>
        </div>


        <div className="flex flex-col md:w-[30%] w-[100%] md:ml-24 leading-relaxed md:text-left text-center">
          <h3 className="md:mt-4 mb-4 font-bold text-2xl">Quick Links</h3>
          <a className="tracking-wide hover:text-blue-500 hover:scale-110 transition-all duration-300 text-lg font-semibold py-1" href="#home">Home</a>
          <a className="tracking-wide hover:text-blue-500 hover:scale-110 transition-all duration-300 text-lg font-semibold py-1" href="#about">About</a>
          <a className="tracking-wide hover:text-blue-500 hover:scale-110 transition-all duration-300 text-lg font-semibold py-1" href="#events">Events</a>
          <a className="tracking-wide hover:text-blue-500 hover:scale-110 transition-all duration-300 text-lg font-semibold py-1" href="#rules">Rules</a>
          <a className="tracking-wide hover:text-blue-500 hover:scale-110 transition-all duration-300 text-lg font-semibold py-1" href="#contact">Contact</a>
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
      <div className="w-full bg-gray-900 text-white text-center pb-5">For any Registration Queries, Contact :
        <br /><span className="text-blue-400 cursor-pointer" onClick={() => window.location.href = "tel:+91 7349708234"}>Brinoth Shawn Dsouza +91 7349708234</span>
      </div>
    </>
  );
};
