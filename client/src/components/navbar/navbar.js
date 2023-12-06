import React, { useState } from 'react';
import { NavbarWrapper ,CustomModal } from './navbar.styled';
import { Navbar, Nav, Image, Button, Form } from 'react-bootstrap';
import  LoginModal  from "../modals/modalLogin.js";
import  RegisterModal  from "../modals/modalRegister.js";
import  PollModal  from "../modals/modalPoll.js";

const NavBar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPoll, setShowPoll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handlePollShow = () => setShowPoll(true);
  const handlePollClose = () => setShowPoll(false);


  const handleLogout = () => {

    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };  

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleLoginClose();
  };

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);


  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);


  return (
    <NavbarWrapper data-testid="Navbar" >
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">
          <Image className="image" src="/logo.png" alt="Logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
          {!isLoggedIn && (
              <>
                <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
                <Nav.Link onClick={handleRegisterShow}>Register</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link onClick={handlePollShow}>Add poll</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <LoginModal show={showLogin} onHide={handleLoginClose} onLoginSuccess={handleLoginSuccess} centered/>

    <RegisterModal show={showRegister} onHide={handleRegisterClose} centered/>
    <PollModal show={showPoll} onHide={handlePollClose} centered/>
    </NavbarWrapper>
  );
};

export default NavBar;
