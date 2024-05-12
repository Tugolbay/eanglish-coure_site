import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const English = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div>
        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.title1")}:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.text1")}
        </motion.p>

        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.title2")}:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.text2")}
        </motion.p>

        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.title3")}:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.text3")}
        </motion.p>

        <motion.h2
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.title4")}:
        </motion.h2>
        <motion.p
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("english.text4")}
        </motion.p>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
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

  @media (max-width: 480px) {
    margin-top: 0rem;
  }
`;
