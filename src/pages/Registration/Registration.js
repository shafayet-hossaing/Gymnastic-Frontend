import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { BiLogInCircle } from "react-icons/bi";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import img from '../../images/banner.jpg';

const Login = () => {
    const history = useHistory()
    const {createUser, error, user, setUser, setError, updateUserName} = useData()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    
    // Form Handling
    const handleForm = e => {
        e.preventDefault();
        createUser(email, password)
        .then(result => {
            const user = result.user
            updateName()
            setUser(user)
            history.push('/login')
        }).catch(error => {
            setError(error.message)
        })
    }



    // Updating User Name
    const updateName = () => {
        updateUserName(name)
    }


    // Taking Input Email value
    const inputEmailValue = e => {
        const inputValue = e.target.value
        setEmail(inputValue)
    } 


    // Taking Input Password value
    const inputPasswordValue = e => {
        const inputPassword = e.target.value
        setPassword(inputPassword)
    }


    return (
        <div className="container mb-5">
            <Row className="justify-content-around" style={{marginTop: "22vh"}}>
            <Col xs={8} md={5} className="shadow p-5">
                    <h1 className="text-center mb-3">Please Register</h1>
                    <Form onSubmit={handleForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" onBlur={(e) => setName(e.target.value)}  />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" onBlur={(e) => setName(name + " " + e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={inputEmailValue} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={inputPasswordValue} />
                        </Form.Group>
                        <Button className="me-3" variant="primary" type="submit">
                            Register
                        </Button>
                        <Link style={{textDecoration: "none"}} to="/login"><span style={{fontSize: "23px"}}><BiLogInCircle /></span> Already Registered?</Link>
                    </Form>
            </Col>
            <Col md={5}>
                <img src={img} className="img-fluid rounded-3" alt="" />
            </Col>
        </Row>
        </div>
    );
};

export default Login;