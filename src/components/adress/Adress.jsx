import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Map } from "./Map";

export const Adress = () => {
  return (
    <Container id="id2">
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
              <p>Шевченко 99Б, Bishkek, Kyrgyzstan</p>
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
                <a href="https://www.instagram.com/befree_edu/">@befree_edu</a>
                <a href="https://www.instagram.com/befree.work_/">
                  @befree.work_
                </a>
                <a href="https://www.instagram.com/befree.ceo/">@befree.ceo</a>
                <a href="https://www.instagram.com/meerim.befree/">
                  @meerim.befree
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

const ContainerChilde = styled("div")`
  display: flex;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
