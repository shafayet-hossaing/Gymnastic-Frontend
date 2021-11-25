import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { BiLogInCircle } from "react-icons/bi";
import { FcGoogle, FcHome } from "react-icons/fc";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';


const Login = () => {
    const {googleLogin, setUser, user, setError, setIsLoading, loginPass} = useData()
    const history = useHistory()
    const location = useLocation()
    const redirect = location.state?.from || "/home"


    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Redirecting After Login
    const googleLog =  () => {
        googleLogin()
        .then(result => {
            setUser(result.user)
            history.push(redirect)
            console.log(result.user);
        }).catch(error => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    // if(user.email){
    //     history.push('/home')
    // }


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

    // Function for form
    const formHandling = e => {
        e.preventDefault()
        loginPass(email, password)
        .then(result => {
            const user = result.user
            setUser(user)
            alert("done")
            history.push('/home')
            console.log("login hoise");
        }).catch(error => {
            setError(error.message)
        })

    }
    return (
        <div className="container">
            <Row className="justify-content-around align-items-center" style={{marginTop: "18vh"}}>
            <Col xs={8} md={5} className="shadow p-5">
                    <h1 className="text-center mb-3">Please Log In</h1>
                    <Form onSubmit={formHandling}>
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
                        <div className="d-grid mb-2">
                            <Button className="me-3" variant="primary" type="submit">
                                Log In
                            </Button>
                        </div>
                            <button onClick={googleLog} className="border-0 bg-white text-primary mt-2" type="submit">
                                <span style={{fontSize: "23px"}}><FcGoogle /></span> Sign Up Google
                            </button>

                            <button className="border-0 bg-white text-primary mt-2" type="submit">
                                <Link style={{textDecoration: "none"}} to="/registration"><span style={{fontSize: "23px"}}><BiLogInCircle /></span> Need Registration?</Link>
                            </button>
                            <button className="border-0 bg-white text-primary mt-2" type="submit">
                                <Link style={{textDecoration: "none"}} to="/home"><span  style={{fontSize: "23px"}}><FcHome /></span>BackToHome</Link>
                            </button>
                    </Form>
            </Col>
        </Row>
        </div>
    );
};

export default Login;