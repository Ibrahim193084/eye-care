import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ibrahim193084/fakedata/main/fakedata.json')
        .then(res => res.json())
        .then(data => data.filter(details =>{
            return details.id==serviceId;
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
                    <p>{details.description}</p>
                    <h3>Surgery Cost: ${details.cost}</h3>
                </div>
                <div>
                    <img style={{height: '500px' , width: '700px'}} src={details.img} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;