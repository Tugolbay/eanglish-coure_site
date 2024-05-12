import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Map } from "../beFreeEanglish/adress/Map";

export const ContactWork = () => {
  return (
    <Container id="1id">
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Наши контакты и адрес
      </motion.h1>
      <ContainerBlock>
        <ContainerChilde>
          <Block>
            <Row3>
              <IoLocationOutline size={30} color="#f16600" />
              <p>Табышалиева 29, Bishkek, Kyrgyzstan</p>
            </Row3>

            <Row2>
              <FaWhatsapp size={30} color="#f16600" />
              <a href="https://api.whatsapp.com/send/?phone=996500887755&text&type=phone_number&app_absent=0">
                Whatsapp
              </a>
            </Row2>

            <Row1>
              <FaInstagram size={30} color="#f16600" />
              <div>
                <a href="https://www.instagram.com/befree.work_/">
                  @befree.work_
                </a>
              </div>
            </Row1>
          </Block>
        </ContainerChilde>

        <div>
          <Map />
        </div>
      </ContainerBlock>
    </Container>
  );
};

const Container = styled("div")`
  margin-top: 40rem;

  h1 {
    font-size: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 55px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 730px) {
    margin-top: 60rem;
  }

  @media (max-width: 700px) {
    margin-top: 120rem;
    h1 {
      font-size: 45px;
      text-align: center;
    }
  }

  @media (max-width: 620px) {
    margin-top: 105rem;
  }

  @media (max-width: 520px) {
    margin-top: 180rem;
  }

  @media (max-width: 474px) {
    margin-top: 165rem;
  }

  @media (max-width: 410px) {
    margin-top: 155rem;
  }

  @media (max-width: 380px) {
    margin-top: 150rem;
  }
`;

const ContainerChilde = styled("div")`
  display: flex;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Row1 = styled("div")`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;

    &:hover {
      color: #f16600;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 800px) {
    div {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
    }
  }

  @media (max-width: 670px) {
    div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

const Row2 = styled("div")`
  display: flex;
  gap: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;

    &:hover {
      color: #f16600;
    }
  }

  p {
    text-decoration: none;
    color: black;
    font-size: 20px;

    &:hover {
      color: #f16600;
    }
  }
`;

const Row3 = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    text-decoration: none;
    color: black;
    font-size: 20px;
    margin: 0;

    &:hover {
      color: #f16600;
    }
  }
`;

const ContainerBlock = styled("div")`
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;
