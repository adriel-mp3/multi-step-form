import { BrowserRouter, Routes, Route } from "react-router-dom";

import { YourInfo } from "./components/Steps/YourInfo";
import { SideNav } from "./components/SideNav/index";
import { SelectPlan } from "./components/Steps/SelectPlan/index";
import { AddOns } from "./components/Steps/AddOns/index";
import { Summary } from "./components/Steps/Summary/index";
import { ThankYou } from "./components/Steps/ThankYou/index";
import { FormStorage } from "./context/FormContext";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <FormStorage>
        <main className="mainContainer">
          <SideNav />
          <Routes>
            <Route path="/" element={<YourInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
      </FormStorage>
    </BrowserRouter>
  );
}

export default App;
