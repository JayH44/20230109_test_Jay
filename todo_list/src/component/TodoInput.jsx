import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function TodoInput({ setTodos }) {
  const [text, setText] = useState('');
  const nextId = useRef(4);
  const inputRef = useRef();
  console.log('todoinput');

  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('할일을 입력해 주세요');
      inputRef.current.focus();
      return;
    }
    setTodos({ type: 'SUBMIT_TODO', text, nextId });
    setText('');
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder='할일을 입력해 주세요'
        value={text}
        onChange={handleInput}
        ref={inputRef}
      />
      <Button>등록</Button>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 1px solid black;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 25px;
  border: none;

  padding-left: 10px;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  border: none;
  background-color: #04acfa;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #057eb6;
  }
`;

export default TodoInput;
