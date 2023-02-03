import React from 'react';
import styled, { css } from 'styled-components';
import {
  MdOutlineDelete,
  MdRadioButtonUnchecked,
  MdCheckCircleOutline,
} from 'react-icons/md';

function TodoItem({ todo, setTodos }) {
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
      <Button done={todo.done} onClick={() => deleteTodo(todo.id)}>
        <MdOutlineDelete />
      </Button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    border-bottom: 1px solid #2778e9;
  }

  svg {
    cursor: pointer;
  }

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      span {
        border-bottom: none;
      }
    `}
`;

const Button = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;
  opacity: ${({ done }) => (done ? 1 : 0)};
  width: 20px;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default TodoItem;
