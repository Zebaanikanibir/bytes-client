import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import image from '../../images/file.png'
import image1 from '../../images/download.jpg'
import './Slider.css';
const Slider = () => {

    
  return (
    <div>  
      <Container>
      <Carousel variant="dark">
  <Carousel.Item>
    <div className="slider-box">
    <img
     
      src={image} style={{width:'100px',height:'100px',borderRadius:'50%'}}
      alt="First slide"
    />
    <div>
        <h5>zeba</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, minima.</p>
    </div>
    </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className="slider-box">
    <img
    
      src={image1} style={{width:'100px',height:'100px',borderRadius:'50%'}}
      alt="First slide"
    />
    <div>
        <h5>zeba</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, minima.</p>
    </div>
    </div>
    

    
  </Carousel.Item>
  <Carousel.Item>
  <div className="slider-box">
    <img
    
      src={image} style={{width:'100px',height:'100px',borderRadius:'50%'}}
      alt="First slide"
    />
    <div>
        <h5>zeba</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, minima.</p>
    </div>
    </div>
    

    
  </Carousel.Item>
</Carousel>
      </Container>
    </div>
  )
}

export default Slider
