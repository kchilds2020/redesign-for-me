import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styled from 'styled-components'
import logo from 'images/logo.png'

const NavigationBar = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(window.location.pathname === '/'){
            window.addEventListener('scroll',() => window.pageYOffset > 20 ? setVisible(true) : setVisible(false))
        }else{
            setVisible(true)
        }

    },[visible])

    return (
        !visible ?
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" style={{ position: 'sticky', top: '0', transition: '200ms'}}>
                <Navbar.Brand href="/"><Logo src={logo}/>Redesign For Me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        :
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ position: 'sticky', top: '0', transition: '200ms', boxShadow: '10px 0px 4px #333'}}>
                <Navbar.Brand href="/"><Logo src={logo}/>Redesign For Me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`

export default NavigationBar