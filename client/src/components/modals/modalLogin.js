import React, { useState } from 'react';
import {  CustomModal } from './modal.styled';
import {  Button, Form } from 'react-bootstrap';

const ModalLogin = ({ show, onHide, onLogin, onLogout }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false)

const Login = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
        const data = await response.json();
        const { token } = data;
        onHide(); 
        setLoginState(true);
        localStorage.setItem('token', token);
      //  setIsLoggedIn(true);
    } else {
        
        console.error('Login failed');
    }
    } catch (error) {
    console.error('Error during login:', error);
    }
    };

    return (

    <CustomModal show={show} onHide={onHide} loginState={loginState} centered>
        <CustomModal.Header closeButton>
        </CustomModal.Header>
        <CustomModal.Title>Login</CustomModal.Title>

        <CustomModal.Body className="d-flex justify-content-center align-items-center">
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        />            
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3" onClick={Login}>
                    Login
                </Button>
                </Form>
        </CustomModal.Body>
    </CustomModal>
    );

}

export default ModalLogin;
