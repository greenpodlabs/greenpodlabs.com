import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './LearnMore.scss'

const LearnMore = () => (
    <Row id="learn-more">
        <Col md={{ span: 5, offset: 1 }} sm={6}>
            <h1 className="tagline">The economic loss of food waste costs India <b>$12 Billion.</b></h1>
            <span className="subtext">In spite of India being the 2nd largest producer of fruits and vegetables, 40% of it is lost before it reaches the consumers.</span>
            <Link className="btn btn-primary" to="our-solution" spy={true} smooth={true} duration={400} delay={100}>SEE OUR SOLUTION</Link>{''}
        </Col>
        <Col md={{ span: 3, offset: 2 }} xs={6}>
            <Image src='/assets/images/india-green.png' fluid />
        </Col>
    </Row>
);

export default LearnMore;