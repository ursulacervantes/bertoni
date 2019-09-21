import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import './TodoList.scss';

const TodoList = props => {
  let pending = props.tasks.filter(val => !val.done);
  let done = props.tasks.filter(val => val.done);

  return (
    <div>
      <ListGroup variant="flush" className="pending">
        {pending.map(item => (
          <ListGroup.Item key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              onChange={() => props.checkTask(item)}
              defaultChecked={item.done}
            />
            <label htmlFor={item.id}>{item.task}</label>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ListGroup variant="flush" className="done">
        {done.map(item => (
          <ListGroup.Item key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              onChange={() => props.checkTask(item)}
              defaultChecked={item.done}
            />
            <label htmlFor={item.id}>{item.task}</label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
