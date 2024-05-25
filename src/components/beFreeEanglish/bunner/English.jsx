import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export const English = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <div>
        <h2 data-aos="fade-right">{t("english.title1")}:</h2>
        <p data-aos="fade-right">{t("english.text1")}</p>

        <h2 data-aos="fade-right">{t("english.title2")}:</h2>
        <p data-aos="fade-right">{t("english.text2")}</p>

        <h2 data-aos="fade-right">{t("english.title3")}:</h2>
        <p data-aos="fade-right">{t("english.text3")}</p>

        <h2 data-aos="fade-right">{t("english.title4")}:</h2>
        <p data-aos="fade-right">{t("english.text4")}</p>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
  padding: 0 1rem 0 1rem;

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
