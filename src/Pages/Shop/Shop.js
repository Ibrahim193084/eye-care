import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div id="shop">
            <h1 className="text-white text-center my-5">OUR <span className="text-danger">SHOP</span></h1>
              <Row xs={1} md={4} className="g-4">
              <Col>
              <Card className="rounded-5 mx-2">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="http://us02-imgcdn.ymcart.com/28157/2019/04/02/3/4/341bf0865c37300f.jpg" />
        <Card.Body>
          <Card.Title>-4d spectacle</Card.Title>
          <Card.Text>
              Price: $5
          </Card.Text>
         <Link to="/addtocart">
        <button className="btn btn-primary">Add to cart</button></Link>
        </Card.Body>
      </Card>
    </Col>
              <Col>
              <Card className="rounded-5 mx-2">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://ak1.ostkcdn.com/images/products/is/images/direct/a7610843d7cc17088bdcb58a8c085c0083c4b328/Eyekepper-Computer-Reading-Glasses-UV-Protection-Readers-For-Men-Women.jpg" />
        <Card.Body>
          <Card.Title>+4d women spectacle</Card.Title>
          <Card.Text>
              Price: $8
          </Card.Text>
         <Link to="/addtocart"><button className="btn btn-primary">Add to cart</button></Link>
        </Card.Body>
      </Card>
    </Col>
              <Col>
              <Card className="rounded-5 mx-2">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoJ178foIqjvcHboh-4B0E2hpqHhzocgMHhs3W5g1FhN_q9DO1_ptSrDZdIdy9GvB2Mo&usqp=CAU" />
        <Card.Body>
          <Card.Title>-3d spectacle</Card.Title>
          <Card.Text>
              Price: $9
          </Card.Text>
          <Link to="/addtocart"> <button className="btn btn-primary">Add to cart</button></Link>
        </Card.Body>
      </Card>
    </Col>
              <Col>
              <Card className="rounded-5 mx-2">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrOh6_qm3D6T0LXxTeRB3a36lN2NJWFc_5f2zCryq30CECvValLbv9lMte6YW5DFbbU&usqp=CAU" />
        <Card.Body>
          <Card.Title>+2d women spectacle</Card.Title>
          <Card.Text>
              Price: $6
          </Card.Text>
         <Link to="/addtocart">
        <button className="btn btn-primary">Add to cart</button></Link>
        </Card.Body>
      </Card>
    </Col>

             </Row>
            
        </div>
    );
};

export default Shop;