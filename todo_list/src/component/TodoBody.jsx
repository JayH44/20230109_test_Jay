import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

function TodoBody({ todos, setTodos }) {
  console.log('todobody');
  return (
    <Container>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </TodoList>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  flex: 1;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default TodoBody;
