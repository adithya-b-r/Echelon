import { useState } from "react"

export const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const hideNav = () => {
    setDisplay(false);
  }

  return (
    <nav className="w-[100%] h-[10vh] bg-black text-white fixed top-0 left-0 flex items-center justify-between px-6 font-gochi">
      <div>
        <h1 class="md:text-5xl text-[2.8rem] tracking-wide">
          <span class="text-lime-500">E</span>
          <span class="text-green-700">c</span>
          <span class="text-yellow-500">h</span>
          <span class="text-teal-500">e</span>
          <span class="text-orange-600">l</span>
          <span class="text-indigo-600">o</span>
          <span class="text-pink-500">n</span>
          <span class="text-amber-500">'</span>
          <span class="text-blue-400">2</span>
          <span class="text-blue-500">5</span>
        </h1>
      </div>

      <div className="gap-8 text-2xl hidden md:flex">
        <a className="tracking-wide hover:text-lime-500 transition-all duration-300" href="#home">Home</a>
        <a className="tracking-wide hover:text-lime-500 transition-all duration-300" href="#about">About</a>
        <a className="tracking-wide hover:text-lime-500 transition-all duration-300" href="#events">Events</a>
        <a className="tracking-wide hover:text-lime-500 transition-all duration-300" href="#rules">Rules</a>
        <a className="tracking-wide hover:text-lime-500 transition-all duration-300" href="#contact">Contact</a>
      </div>

      <i class='bx bx-menu text-4xl md:hidden' onClick={() => setDisplay(!display)}></i>

      {display && (
        <div className="fixed top-16 bg-gray-950 w-[100%] h-fit -mx-6 flex flex-col items-center text-2xl">
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#home">Home</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#about">About</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#events">Events</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#rules">Rules</a>
          <a onClick={hideNav} className="tracking-widest py-3 hover:text-lime-500 transition-all duration-300" href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}