import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Bunner = () => {
  return (
    <Container id="id5">
      <Row>
        <div>
          <motion.h1
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Курс английского языка Bee Free
          </motion.h1>
          <motion.p
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Выпустили более 3000 студентов
          </motion.p>
          <motion.p
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Обустроили{" "}
            <a href="https://www.instagram.com/befree.work_/">@befree.work_</a>
          </motion.p>
        </div>
      </Row>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 30rem;
  padding-top: 10rem;
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
  padding-left: 5rem;

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
