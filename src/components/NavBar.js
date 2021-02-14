import React from "react"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand><Link to="/">Kyle Finn</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/photography">Photography</Link></Nav.Link>
                        <Nav.Link><Link to="/architecture">Architecture</Link></Nav.Link>
                        <Nav.Link><Link to="/travel">Travel</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        
        </>
    )
}

export default NavBar;