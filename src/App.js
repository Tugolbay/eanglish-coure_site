import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { BeFreeWork } from "./components/beFreeWork/BeFreeWork";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/be_free_work" element={<BeFreeWork />} />
      </Routes>
    </div>
  );
}

export default App;
