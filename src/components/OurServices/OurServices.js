import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcServices } from "react-icons/fc";
import './OurServices.css';
const img = "https://vup.modeltheme.com/wp-content/uploads/2019/07/vup-slider-guy.png"


const OurServices = () => {
    return (
        <div>
            <Container className="py-5 mt-5">
                <Row>
                    <Col md={6}>
                        <h1 className="fw-bold text-danger text-center">Our Services Level</h1>
                        <h4 className="fw-bold text-danger text-center mb-5">Here are the services we provide in our gym</h4>
                        <div className="mb-5 text-custom-center">
                            <Row>
                                <Col md={2}>
                                    <span className="p-3" style={{fontSize: "70px"}}><FcServices /></span>
                                </Col>
                                <Col md={9}>
                                    <h4 className="fw-bold mt-2">Simple Fit</h4>
                                    <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-5 text-custom-center">
                            <Row>
                                <Col md={2}>
                                    <span className="p-3" style={{fontSize: "70px"}}><FcServices /></span>
                                </Col>
                                <Col md={9}>
                                    <h4 className="fw-bold mt-2">Basic Body Building</h4>
                                    <p>Basic body means we are ensuring that you are fit for with your body and not have that much of body like a body builder. But you will be fit and fine</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-5 text-custom-center">
                            <Row>
                                <Col md={2}>
                                    <span className="p-3" style={{fontSize: "70px"}}><FcServices /></span>
                                </Col>
                                <Col md={9}>
                                    <h4 className="fw-bold mt-2">Strong Body Builder</h4>
                                    <p>Strong body builder means we will be working for your body so that you can be fit and fine and can show off as well.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={img} className="img-fluid" alt="..." />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;