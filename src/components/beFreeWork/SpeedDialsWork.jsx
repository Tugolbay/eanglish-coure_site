import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTelephonePlusFill } from "react-icons/bs";

const actions = [
  {
    icon: <FaWhatsapp color="green" />,
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send/?phone=996500887755&text&type=phone_number&app_absent=0",
  },
  {
    icon: <FaTelegram color="#0091ff" />,
    name: "Telegram",
    link: "https://telegram.com",
  },
  {
    icon: <FaInstagram color="#ee2a7b" />,
    name: "Instagram",
    link: "https://www.instagram.com/befree.work_/",
  },
];

export const SpeedDialsWork = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<BsTelephonePlusFill />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.link)}
          />
        ))}
      </SpeedDial>
    </Container>
  );
};

const Container = styled(Box)`
  .MuiSpeedDial-fab {
    background-color: #0382e9;

    &:hover {
      background-color: #005daa;
    }
  }
`;
