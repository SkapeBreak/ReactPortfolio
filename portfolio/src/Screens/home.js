import React from 'react'
import '../views/home.css'
import Intro from '../components/intro'
import AboutMe from '../components/aboutMe'
import Projects from '../components/projects'
import More from '../components/others'


export default function home () {
  return (
    
        <>
            <Intro />
            <AboutMe />
            <Projects />
            <footer>
            <h2>Contact me</h2>
          <p>diego1995g@hotmail.com</p>
            </footer>
        </>
  )
}