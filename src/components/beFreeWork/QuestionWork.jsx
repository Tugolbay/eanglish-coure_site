import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

export const QuestionsWork = () => {
  return (
    <Container id="2id">
      <h1>Часто задаваемые вопросы</h1>

      <Block>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Какой уровень английского нужен
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Чтобы работать за границей нужно ли сертификат TOEFL and IELTS
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Знание английского обязательно ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Когда состоится интервью с HILTON DUBAI JUMEIRAH ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            У вас есть возрастные ограничения ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Вакансии как часто появляются ? Можно ли летом ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Еще когда будет набор в Дубай ?
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Block>
    </Container>
  );
};

const Container = styled("div")`
  margin-top: 10rem;
  height: 80vh;

  h1 {
    font-size: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 55px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 45px;
      text-align: center;
    }
  }
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiAccordion-root {
    width: 75vw;
    box-shadow: none;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .MuiAccordionSummary-content {
    font-size: 30px;
    color: #0382e9;
    font-weight: 800;
  }

  .MuiAccordionDetails-root {
    font-size: 20px;
    font-weight: 400;
  }

  .MuiSvgIcon-root {
    color: #0382e9;
    font-size: 30px;
  }

  @media (max-width: 500px) {
    .MuiAccordionSummary-content {
      font-size: 20px;
    }

    .MuiAccordionDetails-root {
      font-size: 15px;
    }
  }
`;
