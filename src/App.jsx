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
    </>
  )
}

export default App
