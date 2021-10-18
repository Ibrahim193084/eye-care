import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name, cost, img, description, id} = props.service
    return (
        <div>
            <Col>
      <Card className="rounded-5 mx-4 mb-5">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {description.slice(0, 70)}
          </Card.Text>
          <Link to={`/details/${id}`}> <button className="btn btn-primary">Details</button></Link>
       
        </Card.Body>
      </Card>
    </Col>
           
        </div>
    );
};

export default Service;

