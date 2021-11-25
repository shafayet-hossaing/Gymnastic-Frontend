import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    
    const {serviceId} = useParams()
    const [data, setData] = useState()
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setData(data.find(td => +serviceId === td.id)))
    },[serviceId])

    
    
    return (
        <div className="container" >
            <div className="row justify-content-center my-5">
                <Col md={8}>
                <Card className="p-3 shadow">
                    <div className="row">
                    <div className="col-md-6">
                        <Card.Img variant="top" style={{height: "320px"}} className="img-fluid" src={data?.img} />
                    </div>
                    <div className="col-md-6">
                        <Card.Body>
                            <Card.Title>{data?.name}</Card.Title>
                            <Card.Text>{data?.level}</Card.Text>
                            <Card.Text>
                            {data?.Description}
                            </Card.Text>
                            <Button variant="primary">To Know More</Button>
                        </Card.Body>
                    </div>
                    </div>
                </Card>
            </Col>
            </div>
        </div>
    );
};

export default ServiceDetails;