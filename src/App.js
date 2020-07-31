import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import TopNav from './TopNav';
import Home from './Home';
import Problem from './Problem';

import './App.scss';

const App = () => (
    <div>
    <TopNav />
    <Container fluid>
        <Home />
        <Problem />
    </Container>
    </div>
);

export default App;