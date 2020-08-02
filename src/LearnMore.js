import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './LearnMore.scss'

const LearnMore = () => (
    <div id="learn-more">
        <Row>
            <Col md={{ span: 5, offset: 1 }} sm={6}>
                <h5>The economic loss of food waste costs India $12 Billion.</h5>
                <span>In spite of India being the 2nd largest producer of fruits and vegetables, 40% of it is lost before it reaches the consumers.</span>
                <Link className="btn btn-primary" to="solution" spy={true} smooth={true} duration={400} delay={100}>SEE OUR SOLUTION</Link>{''}
            </Col>
            <Col md={{ span: 3, offset: 2 }} xs={6}>
                <Image src='/assets/images/india-green.png' fluid />
            </Col>
        </Row>
    </div>
);

export default LearnMore;