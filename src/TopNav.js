import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from "react-scroll";

import './TopNav.scss';

const TopNav = () => (
    <Navbar fixed="top" variant="light" expand="lg">
        <Navbar.Brand href="/">
            <img
                src="/assets/images/logo.png"
                width="67"
                height="67"
                className="d-inline-block align-bottom"
                alt="Greenpod Labs"
            />
            <h2 className="d-lg-inline-block d-none align-bottom">GREENPOD <b>LABS</b></h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Link href="#" className="nav-link" to="home" offset={-500} spy={true} smooth={true} duration={400} delay={100}>HOME</Link>{''}</Nav.Item>
                <Nav.Item><Link href="#" className="nav-link" to="learn-more" offset={-100} spy={true} smooth={true} duration={400} delay={100}>PROBLEM</Link></Nav.Item>
                <Nav.Item><Link href="#" className="nav-link" to="our-solution" offset={-300} spy={true} smooth={true} duration={400} delay={100}>SOLUTION</Link></Nav.Item>
                <Nav.Item><Link href="#" className="nav-link" to="company" offset={-100} spy={true} smooth={true} duration={400} delay={100}>COMPANY</Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default TopNav;