import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Company.scss'

const Company = () => (
    <Row id="company" className="top-margin">
        <Col xs={{ span: 10, offset: 1 }}>
            <Row>
                <Col>
                    <div className="text-center">
                        <h1 className="subheading">COMPANY</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={5} className="mb-5 mb-md-0">
                    <span className="subtext">We are aligned towards United Nations’s Sustainable Development Goals of halving the food waste by <b>2030</b>. We work towards making this a reality.</span>
                    <Button href="mailto: greenpodlabs@gmail.com">CONTACT US</Button>
                </Col>
                <Col md={{ span: 6, offset: 1}}>
                    <Row>
                        <Col lg={4} xs={6}>
                            <Card className="shadow rounded mb-3">
                                <Card.Body>Growth Mindset</Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} xs={6}>
                            <Card className="shadow rounded mb-3">
                                <Card.Body>Sustainability</Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} xs={6}>
                            <Card className="shadow rounded mb-3">
                                <Card.Body>First Principles Thinking</Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} xs={6}>
                            <Card className="shadow rounded mb-3">
                                <Card.Body>Customer Centered</Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} xs={6}>
                            <Card className="shadow rounded mb-3">
                                <Card.Body>Innovation with Agility</Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} xs={6}>
                            <Card className="shadow rounded mb-3">
                                <Card.Body>Integrity with Transparency</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Company;