import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App mt-3">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <Todo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
