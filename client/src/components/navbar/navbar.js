import React, { useState } from 'react';
import { NavbarWrapper ,CustomModal } from './navbar.styled';
import { Navbar, Nav, Image, Button, Form } from 'react-bootstrap';

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  return (
    <NavbarWrapper data-testid="Navbar">
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">
          <Image className="image" src="/logo.png" alt="Logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
            <Nav.Link onClick={handleRegisterShow}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Login Modal */}
      <CustomModal show={showLogin} onHide={handleLoginClose} centered>
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

      {/* Register Modal */}
      <CustomModal className = "modalCustom" show={showRegister} onHide={handleRegisterClose} centered>
  <CustomModal.Header closeButton>
  </CustomModal.Header>
  <CustomModal.Title>Register</CustomModal.Title>

  <CustomModal.Body className="d-flex justify-content-center align-items-center modalCustom">
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Create Account
      </Button>
    </Form>
  </CustomModal.Body>
</CustomModal>
    </NavbarWrapper>
  );
};

export default NavBar;
