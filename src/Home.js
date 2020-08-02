import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Home.scss'

const Home = () => (    
    <Row id="home" className="top-margin">
        <Col xs={{ span: 10, offset: 1 }}>
            <Row>
                <Col md={3} className="mb-5 mb-md-0">
                    <Image src="/assets/images/sustainability.svg" fluid />
                </Col>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="tagline"><b>Nature</b> Inspired Solutions to Minimize Food Waste.</h1>
                    <span className="subtext">Our solution uses a unique composition of active compounds which creates a controlled environment which slows down the ripening rate and limits microbial growth.</span>
                    <Link className="btn btn-primary" to="learn-more" offset={-100} spy={true} smooth={true} duration={400} delay={100}>LEARN MORE</Link>{''}
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Home;