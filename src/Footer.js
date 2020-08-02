import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.scss'

const Footer = () => (
    <Row id="footer">
        <Col md={{ span: 10, offset: 1}} sm={12}>
            <Row id="footer-content">
            </Row>
        </Col>
    </Row>
);

export default Footer;