import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export const Adress = () => {
  return (
    <Container>
      <h1>Наши контакты и адрес</h1>
      <ContainerChilde>
        <Block>
          <Row2>
            <div>
              <FaWhatsapp size={30} color="#f16600" />
              <a href="https://api.whatsapp.com/send/?phone=996500887755&text&type=phone_number&app_absent=0">
                Whatsapp
              </a>
            </div>

            <div>
              <IoLocationOutline size={30} color="#f16600" />
              <p>Шевченко 99Б, Bishkek, Kyrgyzstan</p>
            </div>
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
`;

const Row2 = styled("div")`
  display: flex;
  align-items: center;
  gap: 5rem;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

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
