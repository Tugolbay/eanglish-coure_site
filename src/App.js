import { Office } from "./components/ourOffice/Office";
import { Adress } from "./components/adress/Adress";
import { Bunner } from "./components/bunner/Bunner";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Questions } from "./components/questions/Questions";
import { Teachers } from "./components/teachers/Teachers";
import { Discount } from "./components/bunner/Discount";
import { Main } from "./components/main/Main";
import { English } from "./components/bunner/English";

function App() {
  return (
    <div className="App">
      {/* Адаптивка сделано этим компонентам */}
      <Header />
      {/* --------------------------------- */}

      <Bunner />

      {/* Адаптивка сделано этим компонентам */}

      <English />
      <Discount />
      <Main />
      <Teachers />
      <Contact />

      {/* --------------------------------- */}

      <Office />

      {/* Адаптивка сделано этим компонентам */}

      <Adress />

      {/* --------------------------------- */}

      <Questions />
    </div>
  );
}

export default App;
