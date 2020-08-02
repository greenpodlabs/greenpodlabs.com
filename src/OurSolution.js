import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './OurSolution.scss'

const OurSolution = () => (
    <Row id="our-solution">
        <Col md={{ span: 10, offset: 1 }} sm={12}>
            <Row>
                <Col>
                    <div className="text-center">
                        <h1 className="subheading">Our Solution</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Image src="/assets/images/product.png" fluid />
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                <span className="subtext">
                    We are extending shelf life of fruits and vegetables by naturally activating its defense mechanism thus, slowing the ripening rate and minimizing microbial attack.
                </span>
                <Link className="btn btn-primary" to="company" offset={-200} spy={true} smooth={true} duration={400} delay={100}>MORE ABOUT US</Link>{''}
                </Col>
            </Row>
        </Col>
    </Row>
);

export default OurSolution;