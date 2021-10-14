
import React from 'react'
import { Nav, Navbar,Container } from 'react-bootstrap'
import './NavHead.css'
const NavHead = () => {
  return (
    <div>
     
            <Container>
            <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Brand className="align-items-center" href="#home" ><span id="brand">O</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link href="#link"><span className="nav-link">Home</span></Nav.Link>
            <Nav.Link href="#link"> <span className="nav-link">Product</span></Nav.Link>
            <Nav.Link href="#link"><span className="nav-link">Pricing</span></Nav.Link>
            <Nav.Link href="#link"><span className="nav-link">Contact Us</span></Nav.Link>
            </Nav>
            </Navbar.Collapse>
           </Navbar>
            </Container>
    </div>
  )
}

export default NavHead







