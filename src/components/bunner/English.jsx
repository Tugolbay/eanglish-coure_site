import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const English = () => {
  return (
    <Container>
      <div>
        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Шире кругозор:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Знание английского языка открывает вам доступ к огромному объему
          информации, включая книги, фильмы, новости, научные статьи и
          интернет-ресурсы
        </motion.p>

        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Возможности для путешествий и работы:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Знание английского языка позволяет вам комфортно общаться в
          англоязычных странах, путешествовать без языковых барьеров и расширять
          круг общения
        </motion.p>

        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Карьерные перспективы:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Многие компании ценят знание английского языка и предпочитают нанимать
          сотрудников, владеющих им. Знание английского языка может увеличить
          ваши шансы на получение работы и повысить вашу заработную плату
        </motion.p>

        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Образование:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Знание английского языка открывает доступ к образовательным ресурсам
          на английском языке, включая учебные материалы, курсы и программы
          обучения за рубежом.
        </motion.p>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 9rem;
  padding-left: 1rem;
  padding-right: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: #f16600;
      font-size: 35px;
    }

    p {
      text-align: center;
      width: 90vw;
      font-size: 25px;
    }
  }

  @media (max-width: 745px) {
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 590px) {
    div {
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;
