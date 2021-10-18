import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ibrahim193084/fakedata/main/fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="services">
            <br/>
            <h1 className="text-center text-white mb-5">OUR EYE <span className="text-danger">SERVICES</span></h1>
             <Row xs={1} md={3} className="g-4">
                 {services.map(service =><Service key={service.id} service ={service} />)}
             </Row>
            
        </div>
    );
};

export default Services;