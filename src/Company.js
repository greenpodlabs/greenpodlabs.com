import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Company.scss'

const Company = () => (
    <Row id="company" className="top-margin">
        <Col xs={{ span: 10, offset: 1 }}>
            <div className="text-center">
                <h1 className="subheading">COMPANY</h1>
            </div>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <span className="subtext">We are aligned towards United Nations’s Sustainable Development Goals of halving the food waste by <b>2030</b>. We work towards making this a reality.</span>
                </Col>
            </Row>
            <Row className="mt-5 mt-xs-2">
                <Col md={4} sm={12} className="mt-4">
                    <Card className="shadow rounded" >
                        <Card.Img variant="top" src="/assets/images/growth-mindset.png" />
                        <Card.Body>Growth Mindset</Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mt-4">
                    <Card className="shadow rounded">
                        <Card.Img variant="top" src="/assets/images/sustainability.png" />
                        <Card.Body>Sustainability</Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mt-4">
                    <Card className="shadow rounded">
                        <Card.Img variant="top" src="/assets/images/first-principle-thinking.png" />
                        <Card.Body>First Principles Thinking</Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mt-4">
                    <Card className="shadow rounded">
                        <Card.Img variant="top" src="/assets/images/customer-centered.png" />
                        <Card.Body>Customer Centered</Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mt-4">
                    <Card className="shadow rounded">
                        <Card.Img variant="top" src="/assets/images/innovation-with-agility.png" />
                        <Card.Body>Innovation with Agility</Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12} className="mt-4">
                    <Card className="shadow rounded">
                        <Card.Img variant="top" src="/assets/images/transparency.png" />
                        <Card.Body>Integrity with Transparency</Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="text-center">
                <Button href="mailto: greenpodlabs@gmail.com">CONTACT US</Button>
            </div>
        </Col>
    </Row>
);

export default Company;