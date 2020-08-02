import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './LearnMore.scss'

const LearnMore = () => (
    <Row id="learn-more" className="top-margin">
        <Col xs={{ span: 10, offset: 1 }}>
            <Row>
                <Col md={6} className="mb-5 mb-md-0">
                    <h1 className="tagline">The economic loss of food waste costs India <b>$12 Billion.</b></h1>
                    <span className="subtext">In spite of India being the 2nd largest producer of fruits and vegetables, 40% of it is lost before it reaches the consumers.</span>
                    <Link className="btn btn-primary" to="our-solution" offset={-300} spy={true} smooth={true} duration={400} delay={100}>SEE OUR SOLUTION</Link>{''}
                </Col>
                <Col md={{ span: 4, offset: 2 }}>
                    <Image src='/assets/images/india-green.png' className="d-none d-sm-block" fluid />
                </Col>
            </Row>
        </Col>
    </Row>
);

export default LearnMore;