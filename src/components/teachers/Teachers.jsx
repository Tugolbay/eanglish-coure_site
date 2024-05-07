import React from "react";
import styled from "styled-components";

export const Teachers = () => {
  const data = [
    {
      title1: "Брэд Питт",
      title2: "Опыт преподавания: 10 yrs",
      img: "https://s0.rbk.ru/v6_top_pics/media/img/9/10/756546763213109.jpg",
    },
    {
      title1: "Джони Депп",
      title2: "Опыт преподавания: 4 yrs",
      img: "https://s0.rbk.ru/v6_top_pics/media/img/2/09/346843918588092.webp",
    },
    {
      title1: "Джеки Чан",
      title2: "Опыт преподавания: 6 yrs",
      img: "https://tengrinews.kz/userdata/news/2023/news_494550/resize/photo_425537.jpeg",
    },
    {
      title1: "Дуэйн Джонсон",
      title2: "Опыт преподавания: 10 yrs",
      img: "https://cdnn21.img.ria.ru/images/150086/02/1500860210_0:270:2392:1616_1920x0_80_0_0_a9e08aceab7a1e22fad48349e298aca5.jpg",
    },
    {
      title1: "Анджелина Джоли",
      title2: "Опыт преподавания: 6 yrs",
      img: "https://showbiz.24tv.ua/resources/photos/news/202106/1649450.jpg?v=1661262304000",
    },
    {
      title1: "Крис Такер",
      title2: "Опыт преподавания: 4 yrs",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/9707955/pub_646b40aa7ad0a170097a49d4_646b40b1817f5452ad39dd5e/scale_1200",
    },
  ];
  return (
    <Container>
      <h1>Наши учителя</h1>

      <ContainerChilde>
        {data.map((el) => (
          <Cart>
            <Row3>
              <img src={el.img} alt="img" />
            </Row3>
            <h2>{el.title1}</h2>
            <p>{el.title2}</p>
          </Cart>
        ))}
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

const Cart = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vw;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  button {
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #f16600;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }
`;

const Row3 = styled("div")`
  img {
    width: 25vw;
    border-radius: 15px;
  }
`;

const ContainerChilde = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
`;
