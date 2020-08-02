import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Home.scss'

const Home = () => (    
    <Row id="home">
        <Col md={{ span: 10, offset: 1 }} sm={12}>
            <Row>
                <Col md={3} sm={12}>
                    <Image src="/assets/images/sustainability.svg" fluid />
                </Col>
                <Col md={{ span: 7, offset: 2 }} sm={12}>
                    <div id="tagline">
                        <h1><b>Nature</b> Inspired Solutions to Minimize Food Waste.</h1>
                        <span>Our solution uses a unique composition of active compounds which creates a controlled environment which slows down the ripening rate and limits microbial growth.</span>
                        <Link className="btn btn-primary" to="learn-more" spy={true} smooth={true} duration={400} delay={100}>LEARN MORE</Link>{''}
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Home;