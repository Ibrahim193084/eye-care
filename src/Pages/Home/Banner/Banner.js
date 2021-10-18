import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://images.everydayhealth.com/images/vision/dry-eyes/learning-to-live-with-dry-eye-722x406.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 className="display-3">Do you feel dry eyes after</h3> 
      <h3 className="mb-5 display-3"> using computer or mobile?</h3>
      <button className="btn btn-outline-primary">Read more</button>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width:'1000px'}}
      className="d-block w-100"
      src="https://www.aoa.org/AOA/Images/Patients/Contact-lens-insertion.jpg"
      alt="Second slide"
    />
      <Carousel.Caption className="mb-5">
      <h3 className="display-3">We have vast range of eye</h3> 
      <h3 className="mb-5 display-3">lenses to suggest you!</h3>
      <button className="btn btn-outline-primary">Read more</button>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://www.stahlny.com/wp-content/uploads/2018/05/close-up-eye-1.jpg"
      alt="Third slide"
    />
      <Carousel.Caption className="mb-5">
      <h3 className="display-3">Our lasik specialist can give</h3> 
      <h3 className="mb-5 display-3">you laser treatment to!</h3>
      <button className="btn btn-outline-primary">Read more</button>
  
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;