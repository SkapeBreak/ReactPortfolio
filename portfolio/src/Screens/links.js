import React from 'react'
import '../views/links.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function links() {
  return (
    <>
    <div className="links">
        <div className="box">
            <h1><GitHubIcon/><a>GitHub</a></h1>
            <h1><LinkedInIcon/><a>LinkedIn</a></h1>
            <h1><YouTubeIcon /><a>YouTube</a></h1>
        </div>

    </div>
    </>
  ) 
  
}



