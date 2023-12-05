import React, { useState } from 'react';
import {  CustomModal } from './modal.styled';
import {  Button, Form } from 'react-bootstrap';

const ModalLogin = ({ show, onHide }) => {



    return (

        <CustomModal show={show} onHide={onHide} centered>
        <CustomModal.Header closeButton>
        </CustomModal.Header>
        <CustomModal.Title>Login</CustomModal.Title>

        <CustomModal.Body className="d-flex justify-content-center align-items-center">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </CustomModal.Body>
      </CustomModal>
    );

}

export default ModalLogin;
