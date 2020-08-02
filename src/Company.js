import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Company.scss'

const Company = () => (
    <Row id="company">
        <Col md={{ span: 10, offset: 1 }} sm={12}>
            <Row>
                <Col>
                    <div className="text-center">
                        <h1 className="subheading">Company</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <span className="subtext">We are aligned towards United Nations’s Sustainable Development Goals of halving the food waste by <b>2030</b>. We work towards making this a reality.</span>
                </Col>
                <Col md={{ span: 5, offset: 1}} sm={12}>
                    <Row id="values">
                        <Col>
                            <Row>
                                <Col className="values-box shadow p-3 mb-5 bg-white rounded"><span>Growth mindset</span></Col>
                                <Col className="values-box shadow p-3 mb-5 bg-white rounded"><span>Sustainability</span></Col>
                                <Col className="values-box shadow p-3 mb-5 bg-white rounded"><span>First principles thinking</span></Col>
                            </Row>
                            <Row>
                                <Col className="values-box shadow p-3 mb-5 bg-white rounded"><span>Customer centered</span></Col>
                                <Col className="values-box shadow p-3 mb-5 bg-white rounded"><span>Innovation with agility</span></Col>
                                <Col className="values-box shadow p-3 mb-5 bg-white rounded"><span>Integrity with Transparency</span></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
);

export default Company;