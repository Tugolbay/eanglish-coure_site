import React from "react";
import { HeaderWork } from "./HeaderWork";
import { BunnerWork } from "./BunnerWork";
import styled from "styled-components";
import { MainWork } from "./MainWork";
import { QuestionsWork } from "./QuestionWork";
import { ContactWork } from "./ContactWork";

export const BeFreeWork = () => {
  return (
    <div>
      <HeaderWork />
      <BunnerWork />
      <Block>
        <MainWork />
        <ContactWork />
        <QuestionsWork />
      </Block>
    </div>
  );
};

const Block = styled("div")`
  padding-left: 3rem;
  padding-right: 3rem;
`;
