import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
const img = "https://media.istockphoto.com/vectors/blue-mailbox-with-letters-inside-in-isometric-style-vector-id1280956425?b=1&k=20&m=1280956425&s=170667a&w=0&h=d27NvAxMSIb1xafrt20ACouuUDrw4heQj5lNm9kOX2s="


const Contact = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-5">Contact With Us</h2>
            <Row className="align-items-center pb-5 px-5">
                <Col md={5}>
                    <img src={img} alt="" />
                </Col>
                <Col md={7}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Last name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="something@some.com"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Your Massage</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Your Massage">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;