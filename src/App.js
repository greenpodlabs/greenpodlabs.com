import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import TopNav from './TopNav';
import Home from './Home';
import LearnMore from './LearnMore';

import './App.scss';

const App = () => (
    <Container fluid>
        <Row>
            <TopNav />
            <Home />
            <LearnMore />
        </Row>
    </Container>
);

export default App;