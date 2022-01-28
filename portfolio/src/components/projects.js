import React from 'react'
import '../views/projects.css'
import ExOnt from '../images/project1.png'
import BuildHeim from '../images/project2.jpg'
import AmaClone from '../images/project3.png'
import MyHost from '../images/project4.png'

export default function projects () {
  return (
    <div className='projects'>
        <h2>Projects</h2>
          <div class="project-container">
              <div class="project-card">
                  <img class="project-image" src={ExOnt} alt="Project One Image"/>
                  <h3>Exploring Ontario</h3>
                  <p class="subtext">This is the first project I created when I started. I learnt a lot as a beginner programmer.</p>
                  <hr/>
                  <p class="subtext1"><a class="project-link" href="https://github.com/DiegoGC6/ExploringOntario">View here</a></p>
              </div>
              <div class="project-card">
                <img class="project-image" src={BuildHeim} alt="Project One Image"/>
                <h3>BuildHeim</h3>
                <p class="subtext1">BuildHeim is an early Idea for a community around the game "Valheim" and its building capabilities</p>
                <hr/>
                <p class="subtext"><a class="project-link" href="https://github.com/DiegoGC6/ValheimProject">View here</a></p>
              </div>
              <div class="project-card">
                <img class="project-image" src={AmaClone} alt="Project One Image"/>
                <h3>Amazon Clone</h3>
                <p class="subtext1">This is an e-commerce learning project, strengthening and building on skills, I enjoyed it a lot.</p>
                <hr/>
                <p class="subtext1"><a class="project-link" href="https://github.com/DiegoGC6/Amazon-clone">View here</a></p>
              </div>
              <div class="project-card">
                <img class="project-image" src={MyHost} alt="Project One Image"/>
                <h3>MyHost</h3>
                <p class="subtext">MyHost is an App aimed at enhacing BnB user experience with AR. This project was a team project using SCRUM.</p>
                <hr/>
                <p class="subtext1"><a class="project-link" href="https://www.youtube.com/watch?v=hrfunhygx3s&ab_channel=InceptionULtd">View here</a></p>
              </div>
              
          </div>
          <div className="more">
            <p class="more-text"><a class="project-link" href="https://github.com/DiegoGC6">More Projects</a></p>
      </div>
    </div>
  )
}