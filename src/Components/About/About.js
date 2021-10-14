import React from 'react'
import image from '../../images/annie-spratt-HSCk4Q55bvQ-unsplash.jpg'
import './About.css'
import { Container } from 'react-bootstrap';
const About = () => {
  return (
    <Container>
      <div className="about-box mt-5">
          <div>
              <h3>About US</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae beatae distinctio velit blanditiis, quae quibusdam atque illo vitae perspiciatis iure quasi maxime non odio fugit error sint sequi optio, quas accusamus possimus quia tenetur a. Error quisquam quae dolorum.</p>
          </div>
          <div>
              <img style={{width:'50%',height:'40%'}} src={image} alt="" />
          </div>
      </div>
    </Container>
  )
}

export default About
