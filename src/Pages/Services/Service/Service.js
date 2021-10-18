import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name, cost, img, description} = props.service
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
        <button className="btn btn-primary">Details</button>
        </Card.Body>
      </Card>
    </Col>
           
        </div>
    );
};

export default Service;

