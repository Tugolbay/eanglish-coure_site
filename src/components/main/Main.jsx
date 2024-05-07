import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../modal/Modal";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

export const Main = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      title1: "A1",
      title2: "4 месяца",
      title3: "С полного нуля до уровня выживания",
      img: "https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_1.60bf7773.png&w=640&q=75",
    },
    {
      title1: "A2",
      title2: "4 месяца",
      title3: "Путешествие без переводчика",
      img: "https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_1.60bf7773.png&w=640&q=75",
    },
    {
      title1: "A2+",
      title2: "4 месяца",
      title3: "Уверенное и комфортное общение",
      img: "https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_1.60bf7773.png&w=640&q=75",
    },
    {
      title1: "B1",
      title2: "4 месяца",
      title3: "Свободный разговор на любые темы",
      img: "https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_1.60bf7773.png&w=640&q=75",
    },
    {
      title1: "B2",
      title2: "4 месяца",
      title3: "Для сдачи международных экзаменов и работы",
      img: "https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_1.60bf7773.png&w=640&q=75",
    },
    {
      title1: "B2+",
      title2: "4 месяца",
      title3: "Для работы и учебы за рубежом",
      img: "https://eng.skillbox.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard_1.60bf7773.png&w=640&q=75",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: false,
  };
  return (
    <Container>
      <h1>Чему вы научитесь?</h1>

      <div className="slide-container">
        <Slide {...settings}>
          {data.map((el) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Cart>
                <Row>
                  <h2>{el.title1}</h2>
                  <div>{el.title2}</div>
                </Row>

                <Row2>
                  <p>{el.title3}</p>
                </Row2>

                <div>
                  <button onClick={() => setOpen(true)}>Подробнее</button>
                </div>

                <Row3>
                  <img src={el.img} alt="img" />
                </Row3>
              </Cart>
            </div>
          ))}
        </Slide>
      </div>

      {open && <Modal setOpen={setOpen} />}
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

const Cart = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  height: 60vh;
  border-radius: 20px;
  border: 1px solid #f16600;
  padding: 1.5rem;

  button {
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #f16600;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 3rem;
    border-radius: 30px;
    color: white;
    background-color: #f16600;
  }
`;

const Row2 = styled("div")`
  display: flex;
  justify-content: center;

  p {
    font-size: 30px;
  }
`;

const Row3 = styled("div")`
  img {
    width: 20vw;
  }
`;
