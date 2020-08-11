import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => (
    <Row id="footer">
        <Col xs={{ span: 12, offset: 1}}>
            <Row>
                <Col md={8}>
                    <h5>Get in Touch</h5>
                    <a href="mailto:greenpodlabs@gmail.com">
                        <i className="fa fa-envelope fa-lg">
                            <span>greenpodlabs@gmail.com</span>
                        </i> 
                    </a>
                    <a href="https://linkedin.com/company/greenpod-labs" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin fa-lg">
                            <span>GreenPod Labs on Linkedin</span>
                        </i> 
                    </a>
                </Col>
                <Col md={3}>
                    <br /><br />
                    <img
                        src="/assets/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-bottom"
                        alt="Greenpod Labs"
                    />
                    <h5>GREENPOD LABS</h5>
                    <span id="copyright">© Copyright {(new Date().getFullYear())}</span>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Footer;