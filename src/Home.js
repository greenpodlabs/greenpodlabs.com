import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Home.scss'

const Home = () => (
    <div id="home">
        <Row>
            <Col lg={{ span: 3, offset: 1 }} md={{ span: 6, offset: 3 }} xs={{ span: 11 }}>
                <img
                    id="sustainability"
                    width="100%"
                    height="80%"
                    src="/assets/images/sustainability.svg"
                    className="d-block align-middle"
                    alt="Greenpod Labs"
                />
            </Col>
            <Col lg={{ span: 5, offset: 2 }} md={{ span: 9, offset: 2 }} xs={{ span: 12 }} >
                <div id="tagline">
                    <h1><b>Nature</b> Inspired Solutions to Minimize Food Waste.</h1>
                    <span>Our solution uses a unique composition of active compounds which creates a controlled environment which slows down the ripening rate and limits microbial growth.</span>
                    <Row>
                        <Col md={{ span: 6, offset: 0 }}>
                            <Link className="btn btn-primary" to="problem" spy={true} smooth={true} offset={1000} duration={500} delay={100}>LEARN MORE</Link>{''}
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
);

export default Home;