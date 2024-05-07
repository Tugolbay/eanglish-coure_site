import { Office } from "./components/ourOffice/Office";
import { Adress } from "./components/adress/Adress";
import { Bunner } from "./components/bunner/Bunner";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Questions } from "./components/questions/Questions";
import { Teachers } from "./components/teachers/Teachers";

function App() {
  return (
    <div className="App">
      <Header />
      <Bunner />
      <Main />
      <Teachers />
      <Contact />
      <Office />
      <Adress />
      <Questions />
    </div>
  );
}

export default App;
