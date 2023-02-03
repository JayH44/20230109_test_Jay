import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdOutlineDelete,
  MdRadioButtonUnchecked,
  MdCheckCircleOutline,
} from 'react-icons/md';

function TodoItem({ todo, setTodos }) {
  console.log('todoitem');

  const deleteTodo = (id) => {
    if (window.confirm('삭제 하시겠습니까?'))
      setTodos({ type: 'DELETE_TODO', id });
  };

  const toggleTodo = (id) => {
    setTodos({ type: 'TOGGLE_TODO', id });
  };

  return (
    <Container>
      <TextBox done={todo.done} onClick={() => toggleTodo(todo.id)}>
        {todo.done ? <MdCheckCircleOutline /> : <MdRadioButtonUnchecked />}
        <span>{todo.text}</span>
      </TextBox>
      <Button onClick={() => deleteTodo(todo.id)}>
        <MdOutlineDelete />
      </Button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}

  svg {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  width: 20px;

  &:hover {
    opacity: 1;
  }
`;

export default TodoItem;
