import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const {name, category, about, visit, img, id} = props.doctor
    return (
        <div>
            <Col>
              <Card className="rounded-5 mx-2">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {category}
          </Card.Text>
          <Card.Text>
         Visit fee: ${visit}
          </Card.Text>
          <Link to={`/doctorDetails/${id}`}> <button className="btn btn-primary">Visit profile</button></Link>
       
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;