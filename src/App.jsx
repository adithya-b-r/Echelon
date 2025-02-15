import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { Events } from './Pages/Events/Events'
import { Rules } from './Pages/Rules/Rules'
import { Contact } from './Pages/Contact/Contact'
import { Extra } from './Pages/Extra/Extra'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Events />
      <Rules />
      <Extra />
      <Contact />

      {/* <button
        onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYfzn7gJEKVF0oCa9igF8tFl7HQPALjJKyevpMxQS1ATEFzw/viewform?usp=header"}
        className="meow fixed bottom-5 right-5 bg-blue-500 rounded-md md:w-[18%] w-[50%] h-14  text-3xl text-white mt-16 border-[1px] border-white" >
        Register Now
      </button> */}
    </>
  )
}

export default App
