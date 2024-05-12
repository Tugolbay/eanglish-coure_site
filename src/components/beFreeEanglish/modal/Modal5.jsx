import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSchedule } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

export const Modal5 = ({ setOpen }) => {
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
              <li>Говорить плавно и спонтанно без необходимости поиска слов</li>
              <li>
                Эффективно использовать язык в социальных, академических и
                профессиональных ситуациях.
              </li>
            </Rows1>
          </div>

          <div>
            <h3>Читать:</h3>
            <Rows1>
              <li>Читать длинные и сложные тексты различной тематики</li>
              <li>
                Понимать содержание текста, а также оттенки значения и мнения
                автора.
              </li>
            </Rows1>
          </div>
        </Column>

        <Column>
          <div>
            <h3>Писать:</h3>
            <Rows1>
              <li>
                Писать четкие, хорошо структурированные тексты на различные темы
              </li>
              <li>
                Писать эссе или отчеты, давая аргументированные мнения и
                объяснения.
              </li>
            </Rows1>
          </div>

          <div>
            <h3>Слушать:</h3>
            <Rows1>
              <li>
                Понимать длинные и сложные высказывания и диалоги на различные
                темы
              </li>
              <li>
                Понимать разговорную речь носителей языка даже при быстрой речи.
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
          <Price>Стоимость в месяц: 5500 сом</Price>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <IoBookOutline size={30} color="#f16600" />
          <Price>В стоимость входит учебник</Price>
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
