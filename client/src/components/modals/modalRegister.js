import React, { useState } from 'react';
import {  CustomModal } from './modal.styled';
import {  Button, Form } from 'react-bootstrap';

const ModalRegister = ({ show, onHide }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = async (e) => {

        e.preventDefault();
        if(password === confirmPassword){
        try {
            
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, confirmPassword }),
        });
    
        if (response.ok) {
            console.log('OK');
            onHide();
        } else {
            console.log('Error');
        }
        } catch (error) {
        console.error('Error is:', error);
        }
    
    };
}

    return (

<CustomModal  className = "modalCustom" show={show} onHide={onHide} centered>
    <CustomModal.Header closeButton>
    </CustomModal.Header>
    <CustomModal.Title>Register</CustomModal.Title>

    <CustomModal.Body className="d-flex justify-content-center align-items-center modalCustom">
    <Form  onSubmit={Register}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Group controlId="formConfirmPassword">
            <Form.Label></Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </Form.Group>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
            <Form.Label></Form.Label>
            <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
            Create Account
        </Button>
    </Form>
    </CustomModal.Body>
</CustomModal>
    );

}

export default ModalRegister;
