import { useState } from "react"

export const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const hideNav = () => {
    setDisplay(false);
  }

  return (
    <nav className="w-[100%] h-[10vh] bg-white text-black fixed top-0 left-0 flex items-center justify-between px-6">
      <div className="flex gap-2 items-center">
        <img src="/imgs/sdit.png" className="h-16 w-16 rounded-full" alt="" />
        <h1 className="md:text-2xl text-lg md:tracking-wider tracking-tighter font-extrabold cursor-pointer uppercase text-blue-700">
          Shree Devi <span className="hidden md:inline"> <br /> </span> Institute of Technology
        </h1>
      </div>

      <div className="gap-8 text-2xl hidden md:flex font-semibold">
        <a className="text-lg tracking-wide hover:text-blue-700 hover:scale-110 transition-all duration-300" href="#home">Home</a>
        <a className="text-lg tracking-wide hover:text-blue-700 hover:scale-110 transition-all duration-300" href="#about">About</a>
        <a className="text-lg tracking-wide hover:text-blue-700 hover:scale-110 transition-all duration-300" href="#events">Events</a>
        <a className="text-lg tracking-wide hover:text-blue-700 hover:scale-110 transition-all duration-300" href="#rules">Rules</a>
        <a className="text-lg tracking-wide hover:text-blue-700 hover:scale-110 transition-all duration-300" href="#contact">Contact</a>
        <a className="text-lg tracking-wide hover:text-blue-700 hover:scale-110 transition-all duration-300" href="/pdf/brochure.pdf">Brochure</a>
      </div>

      <i className='bx bx-menu text-4xl md:hidden' onClick={() => setDisplay(!display)}></i>

      {display && (
        <div className="fixed top-16 bg-white text-black font-semibold w-[100%] h-fit -mx-6 flex flex-col items-center text-2xl">
          <a onClick={hideNav} className="text-lg tracking-widest py-3 hover:text-blue-700 transition-all duration-300" href="#home">Home</a>
          <a onClick={hideNav} className="text-lg tracking-widest py-3 hover:text-blue-700 transition-all duration-300" href="#about">About</a>
          <a onClick={hideNav} className="text-lg tracking-widest py-3 hover:text-blue-700 transition-all duration-300" href="#events">Events</a>
          <a onClick={hideNav} className="text-lg tracking-widest py-3 hover:text-blue-700 transition-all duration-300" href="#rules">Rules</a>
          <a onClick={hideNav} className="text-lg tracking-widest py-3 hover:text-blue-700 transition-all duration-300" href="#contact">Contact</a>
          <a onClick={hideNav} href="/pdf/brochure.pdf" className="text-lg tracking-widest py-3 hover:text-blue-700 transition-all duration-300">Brochure</a>
        </div>
      )}
    </nav>
  )
}