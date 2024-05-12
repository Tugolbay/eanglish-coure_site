import React, { useEffect } from "react";
import KyrgyzLanguage from "../../../assats/kyrgyzstan.svg";
import RussianLanguage from "../../../assats/russia.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageSelect = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
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
    cursor: pointer;
  }
`;

export default LanguageSelect;
