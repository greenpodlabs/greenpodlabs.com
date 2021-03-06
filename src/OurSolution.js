import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './OurSolution.scss'

const OurSolution = () => (
    <Row id="our-solution" className="top-margin">
        <Col xs={{ span: 10, offset: 1 }}>
            <Row>
                <Col className="text-center">
                    <h1 className="subheading">OUR SOLUTION</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-5 mb-md-0">
                    <Image src="/assets/images/product.png" fluid />
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                <span className="subtext">
                    We use natural plant extracts to activate the inbuilt defense mechanism which slows down the ripening rate and minimizing microbial growth thus, extending the shelf life of fruits and vegetables.
                </span>
                <Link className="btn btn-primary" to="company" offset={-100} spy={true} smooth={true} duration={400} delay={100}>MORE ABOUT US</Link>{''}
                </Col>
            </Row>
        </Col>
    </Row>
);

export default OurSolution;