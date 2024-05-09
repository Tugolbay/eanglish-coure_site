import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56tgup8",
        "template_9hvaval",
        e.target,
        "-max2LpLG2rH-A3o7"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Ваша заяка отправлена");

    setSelectedLevel("");
    setInp("");
    setInp2("");
  };
  return (
    <ContactContainer id="id4">
      <Container onSubmit={handleSubmit}>
        <Row1>
          <h1>Начните с бесплатного урока</h1>
          <p>
            Оставьте свои контактные данные, и менеджер нашей онлайн-школы
            английского языка с вами свяжется, не успеете и глазом моргнуть
          </p>
        </Row1>
        <Row2>
          <h2>Ответим на все ваши вопросы</h2>
          <input
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            name="name"
            type="text"
            placeholder=" Имя"
          />
          <input
            value={inp2}
            onChange={(e) => setInp2(e.target.value)}
            name="number"
            type="number"
            placeholder=" Номер телефона"
          />

          <select
            name="level"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option disabled value="">
              Выберите уровень
            </option>
            <option value="A1">A1 - Beginner</option>
            <option value="A2">A2 - Elementary</option>
            <option value="B1">B1 - Intermediate</option>
            <option value="B2">B2 - Upper-Intermediate</option>
            <option value="C1">C1 - Advanced</option>
            <option value="C2">C2 - Proficiency</option>
          </select>

          <button type="submit">Отправить</button>
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

const Container = styled("form")`
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

  @media (max-width: 870px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 25px;
    }
    p {
      width: 25vw;
      font-size: 15px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
  }

  @media (max-width: 580px) {
    display: none;
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

    &:hover {
      color: #f16600;
      border: 1px solid #f16600;
      background-color: #fff;
    }
  }

  @media (max-width: 1080px) {
    width: 30vw;

    input {
      width: 28vw;
      height: 2.5rem;
    }

    select {
      width: 28.5vw;
      height: 2.5rem;
    }

    button {
      width: 28vw;
      height: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 18px;
    }
    width: 30vw;
    height: 35vh;

    input {
      width: 28vw;
      height: 2rem;
    }

    select {
      width: 28.5vw;
      height: 2rem;
    }

    button {
      width: 28vw;
      height: 2rem;
    }
  }

  @media (max-width: 580px) {
    width: 60vw;
    height: 50vh;

    h2 {
      font-size: 20px;
    }

    input {
      width: 55vw;
      height: 3rem;
    }

    select {
      width: 55.5vw;
      height: 3rem;
    }

    button {
      width: 55vw;
      height: 3rem;
    }
  }
`;
