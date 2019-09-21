import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TodoInput = props => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();

    if (e.target.elements.task.value) {
      props.addTask(e.target.elements.task.value);
      setTask('');
    }
  };

  return (
    <div>
      <h3>Todo List</h3>
      <Form onSubmit={addTask}>
        <Row>
          <Col>
            <Form.Control
              placeholder="What's on your mind?"
              name="task"
              value={task}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TodoInput;
