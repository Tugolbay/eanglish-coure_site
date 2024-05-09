import React from "react";
import styled from "styled-components";
import Countdown from "../header/Discount";

export const Discount = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
      <Block>
        <h2>Акция 10%</h2>
        <Text>До завершении акции осталось:</Text>
        <Countdown />
        <button onClick={() => scrollToSection("id4")}>
          Записать на пробный урок
        </button>
      </Block>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 12rem;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  padding: 2rem;
  border-radius: 20px;
  background-color: #f16600;

  h2 {
    color: white;
    font-size: 35px;
  }

  button {
    border: none;
    cursor: pointer;
    color: white;
    font-size: 15px;
    border: solid #fff;
    background-color: #f16600;
    border-radius: 10px;
    margin-top: 3rem;
    padding: 1rem 1rem 1rem 1rem;

    &:hover {
      color: #f16600;
      background-color: white;
    }
  }

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (max-width: 500px) {
    width: 20rem;
  }

  @media (max-width: 400px) {
    width: 15rem;
  }
`;

const Text = styled("p")`
  color: white;
  font-size: 25px;

  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
