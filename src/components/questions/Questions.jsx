import React from "react";
import styled from "styled-components";

export const Questions = () => {
  return (
    <Container>
      <h1>Часто задаваемые вопросы</h1>
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
