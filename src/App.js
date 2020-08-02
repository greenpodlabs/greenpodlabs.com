import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import TopNav from './TopNav';
import Home from './Home';
import LearnMore from './LearnMore';
import OurSolution from './OurSolution';

import './App.scss';

const App = () => (
    <Container fluid>
        <Row>
            <Col>
                <TopNav />
                <Home />
                <LearnMore />
                <OurSolution />
            </Col>
        </Row>
    </Container>
);

export default App;