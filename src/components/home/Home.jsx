import React from 'react'
import "./home.css"
import Me from "../../assets/headshot.jpg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
      <img 
          src={Me} 
          alt="Headshot" 
          style={{ width: "200px", height: "250px", borderRadius: "15%" }} 
        />
        <h1 className="home__name">Aaron Essien</h1>
        <span className="home__education">Computer Science Student at the University at Buffalo</span>
      
        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me!</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home