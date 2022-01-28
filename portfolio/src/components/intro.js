import React from 'react'
import '../views/intro.css'
import Pic from '../images/headshot.jpeg'
import {Link} from 'react-router-dom'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function intro () {
  return (
    
    <div className="intro">
      
        <nav>
        <img
        className='headshot' 
        src={Pic}
        alt='Headshot Diego Gomez'
        />
        <ul id="nav-list">
                  <li><a href="https://github.com/DiegoGC6">
                  <GitHubIcon fontSize="Large"
                              color="secondary" />
                  </a></li>
                  <li><a href="https://www.linkedin.com/in/diegogomez-/">
                  <LinkedInIcon fontSize="Large"
                              color="secondary"/>
                  </a></li>
                  <li><a href="https://www.youtube.com/watch?v=hrfunhygx3s&ab_channel=InceptionULtd">
                  <YouTubeIcon fontSize="Large"
                              color="secondary"/>
                  </a></li>
              </ul>
        </nav>
        <div className='intro_box'>
          <div className='intro__text'>
      <h1>Diego Gomez</h1>
        <p>Full stack Developer with a passion for success, business and development...</p>
        </div>
      </div>
        </div>
    
  )
}