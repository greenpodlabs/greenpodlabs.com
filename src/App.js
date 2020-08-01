import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import TopNav from './TopNav';
import Home from './Home';
import LearnMore from './LearnMore';

import './App.scss';

const App = () => (
    <div>
    <TopNav />
    <Container fluid>
        <Home />
        <LearnMore />
    </Container>
    </div>
);

export default App;