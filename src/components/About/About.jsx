import React from 'react'
import "./About.scss"
import code from "./../../../src/icons/code.svg"

function About() {
  return (
    <div className='about-parent' id="about"> 


    <div className='row'> 
        <div className='col-4'> 
        <img src={code} style={{width: 100}}/>


    <div className='projects-list'> 
    <h3> React Projects </h3>
    
</div>


        </div>

        <div className='col-4'> 
        <img src={code} style={{width: 100}}/>
        </div>

        <div className='col-4'> 
        <img src={code} style={{width: 100}}/>
        </div>
    </div>

    {/* <div className='mid-content'> 
        <p> MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based
        </p>
        </div> */}



    </div>
  )
}

export default About