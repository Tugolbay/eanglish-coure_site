import React, { useEffect } from "react";
import styled from "styled-components";
import Countdown from "../header/Discount";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export const Discount = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Title data-aos="fade-right">{t("discount.title2")}:</Title>
      <Row>
        <Countdown />
      </Row>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 379px;
  margin-top: 12rem;
  padding: 36px 0;
  background-image: -webkit-linear-gradient(top, #f16600, rgb(81, 101, 128));
`;

const Title = styled("p")`
  font-size: 36px;
  color: white;
  text-align: center;
`;

const Row = styled("div")`
  display: flex;
  justify-content: center;
`;
