import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <ContactContainer>
      <Container>
        <Row1>
          <h1>Начните с бесплатного урока</h1>
          <p>
            Оставьте свои контактные данные, и менеджер нашей онлайн-школы
            английского языка с вами свяжется, не успеете и глазом моргнуть
          </p>
        </Row1>
        <Row2>
          <h2>Ответим на все ваши вопросы</h2>
          <input type="text" placeholder="Имя" />
          <input type="number" placeholder="Номер телефона" />

          <select>
            <option>kmlkmkl</option>
            <option>kmlkmkl</option>
            <option>kmlkmkl</option>
            <option>kmlkmkl</option>
          </select>

          <button>Отправить</button>
        </Row2>
      </Container>
    </ContactContainer>
  );
};

const ContactContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  border-radius: 20px;
  background-color: #f16600;
  padding: 3rem;
`;

const Row1 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: white;
    width: 20vw;
    font-size: 40px;
    font-weight: 800;
  }

  p {
    width: 20vw;
    color: white;
  }
`;

const Row2 = styled("div")`
  display: flex;
  padding: 2rem;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40vw;
  height: 50vh;
  background-color: white;

  h2 {
    color: #f16600;
    font-size: 30px;
  }

  input {
    width: 35vw;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid #f16600;
  }

  select {
    width: 35.5vw;
    height: 3rem;
    border-radius: 10px;
    border: 1px solid #f16600;
  }

  button {
    width: 35vw;
    height: 3rem;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #f16600;
  }
`;
