import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <p>Продукты</p>
      <p>Формы обучения</p>
      <p>Преподователи</p>
      <Befree>
        <p>Be free</p>
      </Befree>
      <p>Контакты</p>
      <p>Наш офис</p>
      <p>Записаться</p>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  background-color: white;
  z-index: 999;

  p {
    cursor: pointer;
    &:hover {
      color: #f16600;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Befree = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  color: white;
  background-color: #f16600;
  border-radius: 50px;

  p {
    &:hover {
      color: white;
    }
  }
`;
