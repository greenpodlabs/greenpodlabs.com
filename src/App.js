import React from 'react';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import TopNav from './TopNav';

import './App.scss';

const App = () => (
    <Container fluid>
        <TopNav />
        <Home />
    </Container>
);

export default App;