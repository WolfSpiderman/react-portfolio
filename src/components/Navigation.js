import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={currentPage}>
          <Nav.Link eventKey="About" onClick={() => handlePageChange('About')}>
            About
          </Nav.Link>
          <Nav.Link eventKey="Portfolio" onClick={() => handlePageChange('Portfolio')}>
            Portfolio
          </Nav.Link>
          <Nav.Link eventKey="Contact" onClick={() => handlePageChange('Contact')}>
            Contact
          </Nav.Link>
          <Nav.Link eventKey="Resume" onClick={() => handlePageChange('Resume')}>
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
