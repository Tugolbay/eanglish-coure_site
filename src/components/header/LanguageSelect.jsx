import React, { useState } from "react";
import KyrgyzLanguage from "../../assats/kyrgyzstan.svg";
import RussianLanguage from "../../assats/russia.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    ru: {
      translation: {
        Hello: "Привет",
        "How are you?": "Как дела?",
      },
    },
    ky: {
      translation: {
        Hello: "Салам",
        "How are you?": "Кандайсыз?",
      },
    },
  },
});

const LanguageSelect = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Container>
      {language === "ky" && <img src={KyrgyzLanguage} alt="img" />}
      {language === "ru" && <img src={RussianLanguage} alt="img" />}

      <select value={language} onChange={handleChange}>
        <option value="ky">Кыргыз</option>
        <option value="ru">Русский</option>
      </select>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  select {
    border: none;
  }
`;

export default LanguageSelect;
