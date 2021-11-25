import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';
const Services = (props) => {
    const {name, Description, img, id} = props.gym
    
    
    return (
        <Col md={4}>
            <Card className="p-3 mb-4">
                <Card.Img variant="top" style={{height: "320px"}} className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {Description.slice(0, 200)}
                    </Card.Text>
                    <Link to={`service/${id}`}><Button variant="primary">More Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;