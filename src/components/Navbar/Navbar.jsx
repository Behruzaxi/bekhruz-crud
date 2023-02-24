import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarFunc() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto"> 
                        <Link to="/home" style={{textDecoration: "none", listStyle: "none", paddingLeft: "20px", color: "white"}}>
                       <li>Home</li>
                        </Link>
                        <Link to="/table" style={{textDecoration: "none", listStyle: "none", paddingLeft: "20px", color: "white"}}>
                        <li>Table</li>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
