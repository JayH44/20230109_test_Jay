import React, { useReducer } from 'react';
import styled from 'styled-components';
import TodoBody from './TodoBody';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

const initTodos = [
  { id: 1, text: '투두리스트 뼈대 만들기', done: true },
  { id: 2, text: '투두리스트 기능 구현하기', done: false },
  { id: 3, text: '투두리스트 스타일링하기', done: false },
];

const todoReducer = (state, action) => {
  const { type, text, id, nextId } = action;
  switch (type) {
    case 'SUBMIT_TODO':
      return state.concat({ id: nextId.current++, text, done: false });
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

function TodoList() {
  const [todos, setTodos] = useReducer(todoReducer, initTodos);

  return (
    <Container>
      <Wrapper>
        <TodoHeader todos={todos} />
        <TodoBody todos={todos} setTodos={setTodos} />
        <TodoInput setTodos={setTodos} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  width: 400px;
  min-height: 700px;
  margin: 60px auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.3);
`;

export default TodoList;
