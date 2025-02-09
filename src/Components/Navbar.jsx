import { useState } from "react"

export const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const hideNav = () => {
    setDisplay(false);
  }

  return (
    <nav className="w-[100%] h-[10vh] bg-black text-white fixed top-0 left-0 flex items-center justify-between px-6 font-gochi">
      <div>
        <h1 className="md:text-5xl text-[2.5rem] tracking-wider font-semibold hover:scale-105 transition-all duration-500 cursor-pointer">
          <span className="text-lime-500">E</span>
          <span className="text-green-700">c</span>
          <span className="text-yellow-500">h</span>
          <span className="text-teal-500">e</span>
          <span className="text-orange-600">l</span>
          <span className="text-indigo-600">o</span>
          <span className="text-pink-500">n</span>
          <span className="text-amber-500">'</span>
          <span className="text-blue-400">2</span>
          <span className="text-blue-500">5</span>
        </h1>
      </div>

      <div className="gap-8 text-2xl hidden md:flex">
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#home">Home</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#about">About</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#events">Events</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#rules">Rules</a>
        <a className="tracking-wide hover:text-lime-500 hover:scale-110 transition-all duration-300" href="#contact">Contact</a>
      </div>

      <i className='bx bx-menu text-4xl md:hidden' onClick={() => setDisplay(!display)}></i>

      {display && (
        <div className="fixed top-16 bg-gray-950 w-[100%] h-fit -mx-6 flex flex-col items-center text-2xl">
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#home">Home</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#about">About</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#events">Events</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#rules">Rules</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#contact">Contact</a>
          <a onClick={() => window.location.href = "/pdf/brochure.pdf"} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300">Brochure</a>
        </div>
      )}
    </nav>
  )
}