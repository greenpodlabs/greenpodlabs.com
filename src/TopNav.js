import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
            <h2 className="d-lg-inline-block d-none align-bottom">Greenpod <b>Labs</b></h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="#product">PRODUCT</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#science">SOLUTION</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#team">CONTACT</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default TopNav;