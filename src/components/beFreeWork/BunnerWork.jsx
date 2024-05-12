import React from "react";
import styled from "styled-components";
import { SpeedDialsWork } from "./SpeedDialsWork";

export const BunnerWork = () => {
  return (
    <Container id="3id">
      <img
        src="https://bigpicture.ru/wp-content/uploads/2016/07/travel-970-head.jpg"
        alt="img"
      />
      <h1>Be Free трудоустройство за границу</h1>
      <p>Трудоустроили 3000 и выше кандидатов</p>

      <SpeedDialsStyle>
        <SpeedDialsWork />
      </SpeedDialsStyle>
    </Container>
  );
};

const Container = styled("div")`
  h1 {
    margin: 0;
    color: white;
    margin-left: 5rem;
    font-size: 70px;
    width: 50vw;
    padding-top: 15rem;
  }

  p {
    font-size: 30px;
    color: white;
    margin-left: 5rem;
    font-weight: 800;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 25px;
    }
  }

  @media (max-width: 610px) {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 15px;
    }

    img {
      height: 80vh;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 10px;
    }
  }

  @media (max-width: 395px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 10px;
    }
  }
`;

const SpeedDialsStyle = styled("div")`
  position: fixed;
  top: 25rem;
  right: 6rem;
  z-index: 999;
`;
