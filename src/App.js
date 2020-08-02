import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import TopNav from './TopNav';
import Home from './Home';
import LearnMore from './LearnMore';
import OurSolution from './OurSolution';
import Company from './Company';
import Footer from './Footer';

import './App.scss';

const App = () => (
    <Container fluid>
        <Row>
            <Col>
                <TopNav />
                <Home />
                <LearnMore />
                <OurSolution />
                <Company />
                <Footer />
            </Col>
        </Row>
    </Container>
);

export default App;