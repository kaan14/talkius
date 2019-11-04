import React, { Component } from 'react'
import logo from '../TalkiusLogo.jpeg'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'


import './Header.css'


class Header extends Component {
    render() {
        return (
            <div>
                <div className="headerOutter">
                    <Navbar bg="light" expand="lg">

                        <Navbar.Brand href="#home"><Image src={logo} id="logoNav"></Image></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Signin</Nav.Link>
                                <Nav.Link href="#link">Signup</Nav.Link>
                                <NavDropdown title="Others" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Become a Tutor</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Benefits of the System</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">How it works</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </div >
        )
    }
}
export default Header; 