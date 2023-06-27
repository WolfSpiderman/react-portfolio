import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={currentPage}>
          <Nav.Link 
            eventKey="About" 
            onClick={() => handlePageChange('About')} 
            style={{ fontSize: "20px" }} // Add the inline style here
          >
            About
          </Nav.Link>
          <Nav.Link 
            eventKey="Portfolio" 
            onClick={() => handlePageChange('Portfolio')} 
            style={{ fontSize: "20px" }}
          >
            Portfolio
          </Nav.Link>
           <Nav.Link 
            eventKey="Contact" 
            onClick={() => handlePageChange('Contact')} 
            style={{ fontSize: "20px" }}
          >
            Contact
          </Nav.Link>
          <Nav.Link 
            eventKey="Resume" 
            onClick={() => handlePageChange('Resume')} 
            style={{ fontSize: "20px" }}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


