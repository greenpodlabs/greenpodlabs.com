import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => (
    <Row id="footer">
        <Col xs={{ span: 12, offset: 1 }}>
            <Row>
                <Col sm={3}>
                    <span id="copyright">
                        © Copyright {new Date().getFullYear()}
                    </span>
                </Col>
                <Col sm={6}>
                    <a href="mailto:info@greenpodlabs.com">
                        <i className="fa fa-envelope fa-lg">
                            <span>info@greenpodlabs.com</span>
                        </i>
                    </a>
                    <a
                        href="https://linkedin.com/company/greenpod-labs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-linkedin fa-lg">
                            <span>GreenPod Labs</span>
                        </i>
                    </a>
                    <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-lock fa-lg">
                            <span>Privacy Policy</span>
                        </i>
                    </a>
                </Col>
                <Col sm={3}>
                    <img
                        src="/assets/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-bottom"
                        alt="Greenpod Labs"
                    />
                    <h5>GREENPOD LABS</h5>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Footer;
