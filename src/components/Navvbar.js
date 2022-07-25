import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg'


function Navvbar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '100px' }} src={logo} alt='logo' /></Navbar.Brand>
                    <Nav style={{ marginLeft: '600px' }} className="me-auto">

                        <Nav.Link style={{ paddingRight: '50px' }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ paddingRight: '50px' }} href="#features">Features</Nav.Link>
                        <Nav.Link style={{ paddingRight: '50px' }} href="#Contact">Contact</Nav.Link>


                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navvbar