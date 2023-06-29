import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={currentPage}>
          <Link 
            to="/"
            onClick={() => handlePageChange('About')} 
            style={{ fontSize: "20px", textDecoration: "none", color: "white" }}
          >
            <Nav.Link 
              eventKey="About"
              as="div"
            >
              About
            </Nav.Link>
          </Link>

          <Link 
            to="/portfolio"
            onClick={() => handlePageChange('Portfolio')} 
            style={{ fontSize: "20px", textDecoration: "none", color: "white" }}
          >
            <Nav.Link 
              eventKey="Portfolio"
              as="div"
            >
              Portfolio
            </Nav.Link>
          </Link>

          <Link 
            to="/contact"
            onClick={() => handlePageChange('Contact')} 
            style={{ fontSize: "20px", textDecoration: "none", color: "white" }}
          >
            <Nav.Link 
              eventKey="Contact"
              as="div"
            >
              Contact
            </Nav.Link>
          </Link>

          <Link 
            to="/resume"
            onClick={() => handlePageChange('Resume')} 
            style={{ fontSize: "20px", textDecoration: "none", color: "white" }}
          >
            <Nav.Link 
              eventKey="Resume"
              as="div"
            >
              Resume
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
