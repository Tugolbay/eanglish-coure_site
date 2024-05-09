import React from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageSelect from "./LanguageSelect";

export const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Text onClick={() => scrollToSection("id6")}>Формат обучения</Text>
      <Text onClick={() => scrollToSection("id1")}>Преподователи</Text>
      <Text onClick={() => scrollToSection("id4")}>Записаться</Text>
      <Title onClick={() => scrollToSection("id5")}>Be free</Title>
      <Text onClick={() => scrollToSection("id3")}>Наш офис</Text>
      <Text onClick={() => scrollToSection("id2")}>Контакты</Text>
      <Language>
        <LanguageSelect />
      </Language>

      <Adaptive2>
        <RxHamburgerMenu
          onClick={handleClick}
          size={40}
          color="#f16600"
          style={{ paddingRight: "3rem" }}
          cursor="pointer"
        />
      </Adaptive2>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("id6");
          }}
        >
          Формат обучения
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("id1");
          }}
        >
          Преподователи
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("id2");
          }}
        >
          Контакты
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("id3");
          }}
        >
          Наш офис
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("id4");
          }}
        >
          Записаться
        </MenuItem>
      </Menu>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  background-color: white;
  z-index: 999;
  padding-left: 2rem;
`;

const Title = styled("p")`
  color: #f16600;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  cursor: pointer;
`;

const Text = styled("p")`
  cursor: pointer;
  &:hover {
    color: #f16600;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 899px) {
    display: none;
  }
`;

const Adaptive2 = styled("div")`
  @media (min-width: 900px) {
    display: none;
  }
`;

const Language = styled("div")`
  padding-right: 4.5rem;

  @media (max-width: 899px) {
    padding-right: 0rem;
  }
`;
