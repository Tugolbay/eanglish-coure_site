import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Questions = () => {
  return (
    <Container>
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Часто задаваемые вопросы
      </motion.h1>
    </Container>
  );
};

const Container = styled("div")`
  margin-top: 10rem;
  padding: 0 3rem 0 3rem;

  h1 {
    font-size: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 45px;
    }
  }

  @media (max-width: 542px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 35px;
    }
  }
`;
