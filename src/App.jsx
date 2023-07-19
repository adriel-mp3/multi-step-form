import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourInfo from "./components/Steps/YourInfo/YourInfo";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import SelectPlan from "./components/Steps/SelectPlan/SelectPlan";
import AddOns from "./components/Steps/AddOns/AddOns";
import Summary from "./components/Steps/Summary/Summary";
import ThankYou from "./components/Steps/ThankYou/ThankYou";
import { FormStorage } from "./context/FormContext";

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
