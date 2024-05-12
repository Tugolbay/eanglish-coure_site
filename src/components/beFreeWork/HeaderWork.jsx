import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const HeaderWork = () => {
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
      <Text onClick={() => scrollToSection("1id")}>Контакты</Text>
      <Text onClick={() => scrollToSection("2id")}>Вопросы</Text>
      <Title onClick={() => scrollToSection("3id")}>Be free work</Title>
      <Text onClick={() => scrollToSection("4id")}>Процесс</Text>
      <Links to="/">Be free_edu</Links>
      <RxHamburgerMenuStyle
        size={35}
        color="#0382e9"
        cursor="pointer"
        onClick={handleClick}
      />

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
            scrollToSection("1id");
          }}
        >
          Контакты
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("2id");
          }}
        >
          Вопросы
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            scrollToSection("4id");
          }}
        >
          Процесс
        </MenuItem>
      </Menu>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  background-color: white;
  z-index: 999;

  @media (max-width: 620px) {
    justify-content: space-between;
    padding-left: 2rem;
  }
`;

const Title = styled("p")`
  color: #0382e9;
  font-size: 30px;
  font-weight: 800;
  margin: 0;
  cursor: pointer;
`;

const Text = styled("p")`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #0382e9;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

const Links = styled(Link)`
  cursor: pointer;
  color: black;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #0382e9;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

const RxHamburgerMenuStyle = styled(RxHamburgerMenu)`
  padding-right: 4rem;

  @media (min-width: 621px) {
    display: none;
  }
`;
