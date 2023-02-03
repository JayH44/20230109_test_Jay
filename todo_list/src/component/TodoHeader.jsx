import React from 'react';
import styled from 'styled-components';

function TodoHeader({ todos }) {
  const dateStr = new Date().toLocaleDateString('ko-KR', { dateStyle: 'full' });
  const length = todos.length;
  const count = todos.filter((todo) => todo.done).length;
  const percent = length ? Math.round((count / length) * 100) : 0;

  return (
    <Container>
      <h1>{dateStr}</h1>
      <p>
        완료 {count}/{length}, 진행률 {percent}%
      </p>
      <PercentageWrapper>
        <PercentageBar percent={percent} />
      </PercentageWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-bottom: 1px solid #b1ccf3;

  p {
    font-size: 0.9rem;
  }
`;
const PercentageWrapper = styled.div`
  background-color: white;
  height: 15px;
  border-radius: 10px;
  overflow: hidden;
`;
const PercentageBar = styled.div`
  background-color: #04acfa;
  width: 100%;
  height: 100%;

  transition: transform 0.4s;
  transform: scaleX(${({ percent }) => percent}%);
  transform-origin: left;
`;

export default TodoHeader;
