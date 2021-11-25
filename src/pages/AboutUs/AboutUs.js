import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
const img = "https://www.glogym.co.uk/wp-content/uploads/2016/01/red-gym-banner.jpg"

const AboutUs = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center my-4">About Us</h1>
                        <div className="my-5">
                        <Card>
                            <Card.Img variant="top" src={img} className="img-fluid" />
                            <Card.Body>
                                <h3 className="my-4">Something About Us</h3>
                                <Card.Text>
                                    We started at the beginning of bringing the gym in Bangladesh and we got awarded by international community.
                                    We bring the gym market in the this country. So we are the best in this country and the best in this world
                                    competition as well. Let's talk about gym history: The first gymnasiums in history were dated over 3000 years ago, in ancient Persia, where they were known as Zurkhaneh, as areas that encouraged physical fitness. But gyms formally came into existence in ancient Greece. The word 'gymnasium' is derived from the Greek word 'gymnos', which means naked.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-center mb-5 mt-4">Work With Us</h1>
                        <Row>
                            <Col md={4}>
                                <div className="mb-5 text-custom-center py-4 rounded-3 shadow px-5">
                                    <Row>
                                        <Col>
                                            <h4 className="fw-bold text-danger mt-2">Work From Home</h4>
                                            <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-5 text-custom-center py-4 rounded-3 shadow px-5">
                                    <Row>
                                        <Col>
                                            <h4 className="fw-bold text-danger mt-2">In Office</h4>
                                            <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-5 text-custom-center py-4 rounded-3 shadow px-5">
                                    <Row>
                                        <Col>
                                            <h4 className="fw-bold text-danger mt-2">Country</h4>
                                            <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={4}>
                                <div className="mb-5 text-custom-center py-4 rounded-3 shadow px-5">
                                    <Row>
                                        <Col>
                                            <h4 className="fw-bold text-danger mt-2">Projects</h4>
                                            <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-5 text-custom-center py-4 rounded-3 shadow px-5">
                                    <Row>
                                        <Col>
                                            <h4 className="fw-bold text-danger mt-2">As Trainer</h4>
                                            <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-5 text-custom-center py-4 rounded-3 shadow px-5">
                                    <Row>
                                        <Col>
                                            <h4 className="fw-bold text-danger mt-2">Employee</h4>
                                            <p>We basically give you the right path to be fit and fine. And we ensure that the you get a simple body shape with fit</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;