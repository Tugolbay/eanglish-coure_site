/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SpeedDials } from "./SpeedDial";

export const Bunner = ({ language }) => {
  const { t } = useTranslation();
  return (
    <Container id="id5">
      <Row>
        <div>
          {language === "ru" ? (
            <motion.h1
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t("bunner.title")} Bee free
            </motion.h1>
          ) : (
            <motion.h1
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Bee free {t("bunner.title")}
            </motion.h1>
          )}

          <motion.p
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t("bunner.text1")}
          </motion.p>
          <motion.p
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {t("bunner.text2")}{" "}
            <a href="https://www.instagram.com/befree.work_/" target="_blank">
              @befree.work_
            </a>
          </motion.p>
        </div>

        <motion.img
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="https://ienglish.ru/assets/basetheme-design/images/personal-teacher.png"
          alt="img"
        />
      </Row>

      <SpeedDialsStyle>
        <SpeedDials />
      </SpeedDialsStyle>
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
    width: 35vw;
    margin-top: 9rem;
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 70px;
      width: 50vw;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 55px;
      width: 50vw;
    }
  }

  @media (max-width: 850px) {
    img {
      margin-top: 0rem;
    }
  }

  @media (max-width: 770px) {
    h1 {
      font-size: 45px;
      width: 50vw;
    }
  }

  @media (max-width: 700px) {
    img {
      display: none;
    }

    h1 {
      font-size: 70px;
      width: 50vw;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 60px;
    }
  }

  @media (max-width: 480px) {
    height: 20rem;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 20px;
    }

    a {
      font-size: 20px;
    }
  }

  @media (max-width: 400px) {
    padding-left: 2rem;
    h1 {
      font-size: 40px;
      width: 100%;
    }

    p {
      font-size: 20px;
    }

    a {
      font-size: 20px;
    }
  }
`;

const SpeedDialsStyle = styled("div")`
  position: fixed;
  top: 25rem;
  right: 6rem;
  z-index: 999;
`;
