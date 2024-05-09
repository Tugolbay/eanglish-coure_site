import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSchedule } from "react-icons/md";

export const Modal2 = ({ setOpen }) => {
  return (
    <Container>
      <ModalContent>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          onClick={() => setOpen(false)}
        >
          <IoMdClose size={30} cursor="pointer" />
        </div>

        <Column>
          <div>
            <h3>Говорить:</h3>
            <Rows1>
              <li>Выражать простые мысли о себе, своих друзьях и семье</li>
              <li>
                Задавать и отвечать на вопросы о своих интересах и потребностях.
              </li>
            </Rows1>
          </div>

          <div>
            <h3>Читать:</h3>
            <Rows1>
              <li>
                Читать короткие и простые тексты, например, объявления, письма и
                расписания.
              </li>
            </Rows1>
          </div>
        </Column>

        <Column>
          <div>
            <h3>Писать:</h3>
            <Rows1>
              <li>
                Писать короткие сообщения и письма, например, благодарности и
                приглашения.
              </li>
            </Rows1>
          </div>

          <div>
            <h3>Слушать:</h3>
            <Rows1>
              <li>
                Понимать простую информацию в разговорах, если говорят медленно
                и четко.
              </li>
            </Rows1>
          </div>
        </Column>

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
  padding: 1.5rem;

  background-color: #fefefe;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    font-weight: 800;
    font-size: 25px;
    color: #f16600;
  }
`;

const Rows1 = styled("ul")`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 38vw;
`;

const Price = styled("p")`
  font-size: 20px;
  font-weight: 800;
`;

const Column = styled("div")`
  display: flex;
`;