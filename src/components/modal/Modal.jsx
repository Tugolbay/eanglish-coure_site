import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSchedule } from "react-icons/md";

export const Modal = ({ setOpen }) => {
  return (
    <Container>
      <ModalContent>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          onClick={() => setOpen(false)}
        >
          <IoMdClose size={30} cursor="pointer" />
        </div>
        <h3>Какие умения даёт уровень:</h3>
        <Rows1>
          <div>
            <ul>
              <li>задать простые вопросы</li>
              <li>попросить о помощи</li>
              <li>узнать, как куда-то добраться</li>
              <li>купить билет</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>сделать заказ в ресторане и покупку в магазине</li>
              <li>забронировать гостиницу</li>
            </ul>
          </div>
        </Rows1>
        <h3>Вы будете знать:</h3>
        <Rows1>
          <div>
            <ul>
              <li>времена — настоящее, прошедшее, будущее.</li>
              <li>700 слов и выражений;</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                С полного нуля — 32 занятия. Это 4 месяца при двух занятиях в
                неделю.
              </li>
              <li>Если вы знаете многое в теории — 16-20 занятий.</li>
            </ul>
          </div>
        </Rows1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <RiMoneyDollarCircleLine size={30} color="#f16600" />
          <Price>Стоимость в месяц: 4000 сом</Price>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <MdOutlineSchedule size={30} color="#f16600" />
          <Price>5 раз в неделю, пн - пт</Price>
        </div>
      </ModalContent>
    </Container>
  );
};

const Container = styled("div")`
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled("div")`
  width: 80vw;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 2.5rem;

  background-color: #fefefe;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    font-weight: 800;
    font-size: 30px;
    color: #f16600;
  }
`;

const Rows1 = styled("div")`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 20px;
  }
`;

const Price = styled("p")`
  font-size: 20px;
  font-weight: 800;
`;
