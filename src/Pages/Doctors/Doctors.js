import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ibrahim193084/fakedata/main/fakedata2.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <h1 className="text-white text-center my-5">MEET OUR <span className="text-danger">TEAM</span></h1>
             <Row xs={1} md={4} className="g-4">
                 {doctors.map(doctor =><Doctor key={doctor.id} doctor ={doctor} />)}
             </Row>
            
        </div>
    );
};

export default Doctors;