import React from "react";
import EmployeeSection from "./EmployeeSection";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-slate-100 ">
      <BrowserRouter>
        <EmployeeSection />
      </BrowserRouter>
    </div>
  );
};

export default App;
