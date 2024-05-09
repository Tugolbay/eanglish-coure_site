import React from "react";
import styled from "styled-components";

export const Map = () => {
  return (
    <div>
      <IFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1420.3162089274797!2d74.58587593247343!3d42.87202971820552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8241b52669f%3A0xb8b43841ad54c50b!2zMjkg0YPQu9C40YbQsCDQotCw0LHRi9GI0LDQu9C40LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1715240530731!5m2!1sru!2skg"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responcive Google Map"
        style={{ border: "none" }}
      ></IFrame>
    </div>
  );
};

const IFrame = styled("iframe")`
  width: 900px;
  height: 450px;
  @media (max-width: 1300px) {
    width: 700px;
  }

  @media (max-width: 1170px) {
    width: 600px;
  }

  @media (max-width: 900px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
