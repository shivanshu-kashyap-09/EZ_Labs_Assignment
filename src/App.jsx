import React, {useState} from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Team from './components/Team.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import ServiceWrapper from './components/services/ServiceWrapper.jsx'

const App = () => {
  const [heroShift, setHeroShift] = useState(false)

  return (
    <>
      <Navbar setHeroShift={setHeroShift} />
      <Hero heroShift={heroShift} />
      <Team />
      <About />
      <ServiceWrapper /> 
      <Portfolio />
      <Contact />
    </>
  )
}

export default App