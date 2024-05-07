import React from "react";
import styled from "styled-components";

export const Bunner = () => {
  return (
    <Container>
      <Row>
        <div>
          <h1>Курс английского языка Bee Free</h1>
          <p>Выпустили более 3000 студентов</p>
          <p>
            Обустроили{" "}
            <a href="https://www.instagram.com/befree.work_/">@befree.work_</a>
          </p>
        </div>

        <img
          src="https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoman.9e559e47.png&w=1920&q=75"
          alt="img"
        />
      </Row>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  padding-top: 10rem;
`;

const Row = styled("div")`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    color: #f16600;
    font-size: 70px;
    width: 50vw;
  }

  p {
    font-size: 25px;
  }

  a {
    color: #f16600;
    text-decoration: none;
    font-size: 25px;
  }

  img {
    width: 50vw;
  }
`;
