import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const DoctorDetails = () => {
    const {doctorsId} = useParams()
    const [details, setDetails] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ibrahim193084/fakedata/main/fakedata2.json')
        .then(res => res.json())
        .then(data => data.filter(details =>{
            return details.id==doctorsId;
        }))
        .then((matched) =>setDetails(matched[0]))
    },[])

    console.log(details)

    

    return (
        <div>
              <Navigation></Navigation>
            <div className="d-flex justify-content-center align-items-center">
                <div className="me-auto text-white">
                    <h1>{details.name}</h1>
                    <h3>{details.category}</h3>
                    <p>{details.about}</p>
                    <h3>Visit Fee: ${details.visit}</h3>
                    <i className="fas fa-phone ms-1 display-6"></i>
                    <i className="fab fa-facebook ms-4 display-6"></i>
                    <i className="fab fa-twitter ms-4 display-6"></i>
                    <i className="fab fa-whatsapp ms-4 display-6"></i>
                </div>
                <div>
                    <img style={{height: '500px' , width: '700px'}} src={details.img} alt="" />
                </div>
            </div>
            <Footer></Footer>
             
        </div>
    );
};

export default DoctorDetails;