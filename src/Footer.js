import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.scss';

const Footer = () => (
    <Row id="footer">
        <Col xs={{ span: 10, offset: 1}}>
            <Row>
                <Col md={9}>
                    <h5>Get in touch</h5>
                    <a href="mailto:greenpodlabs@gmail.com">
                        <i className="fa fa-envelope fa-lg"></i>
                    </a>
                    <a href="mailto:greenpodlabs@gmail.com">
                        <i className="fa fa-linkedin fa-lg"></i>
                    </a>
                </Col>          
                <Col md={3}>
                    <span>© Copyright 2020 GreenPod Labs</span>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Footer;