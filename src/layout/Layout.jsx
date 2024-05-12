import React, { useState } from "react";
import { Header } from "../components/beFreeEanglish/header/Header";
import { Bunner } from "../components/beFreeEanglish/bunner/Bunner";
import { English } from "../components/beFreeEanglish/bunner/English";
import { Discount } from "../components/beFreeEanglish/bunner/Discount";
import { Main } from "../components/beFreeEanglish/main/Main";
import { Teachers } from "../components/beFreeEanglish/teachers/Teachers";

import { Contact } from "../components/beFreeEanglish/contact/Contact";
import { Office } from "../components/beFreeEanglish/ourOffice/Office";

import { Adress } from "../components/beFreeEanglish/adress/Adress";
import { Questions } from "../components/beFreeEanglish/questions/Questions";

export const Layout = () => {
  const [language, setLanguage] = useState("ru");

  return (
    <div>
      <Header setLanguage={setLanguage} language={language} />
      <Bunner language={language} />
      <English />
      <Discount />
      <Main />
      <Teachers />
      <Contact />

      {/* --------------------------------- */}

      <Office />

      {/* --------------------------------- */}

      <Adress />
      <Questions />
    </div>
  );
};
