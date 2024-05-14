import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

export const InfoPage = () => {
  return (
    <Container>
      <div>
        <Title>
          <CountUp
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "#111",
            }}
            start={0}
            end={10}
            duration={2.5}
          />
        </Title>
        <Desc>лет</Desc>
        <Text>на рынке</Text>
      </div>
      <div>
        <Title>
          <CountUp
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "#111",
            }}
            start={0}
            end={100}
            duration={2.5}
          />
        </Title>
        <Desc>квалифицированных</Desc>
        <Text>преподавателей</Text>
      </div>
      <div>
        <Title>
          <CountUp
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "#111",
            }}
            start={0}
            end={70}
            suffix="%"
            duration={2.5}
          />
        </Title>
        <Desc>студентов</Desc>
        <Text>по рекомендациям</Text>
      </div>
      <div>
        <Title>
          <CountUp
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "#111",
            }}
            start={0}
            end={20}
            duration={2.5}
          />
        </Title>
        <Desc>авторских</Desc>
        <Text>программ обучения</Text>
      </div>
      <div>
        <Title>
          <CountUp
            start={0}
            end={3000}
            duration={2.5}
            style={{
              fontSize: "38px",
              fontWeight: "600",
              color: "#111",
            }}
          />
        </Title>
        <Desc>студентов</Desc>
        <Text>достигли цели</Text>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 15rem 5rem 12rem 5rem;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;

const Title = styled("div")`
  text-align: center;
`;

const Desc = styled("p")`
  text-align: center;
  font-size: 18px;
  color: #111;
  font-weight: 600;

  @media (max-width: 980px) {
    font-size: 25px;
  }
`;

const Text = styled("p")`
  text-align: center;
  font-size: 18px;
  color: rgba(17, 17, 17, 0.7);

  @media (max-width: 980px) {
    font-size: 25px;
  }
`;
