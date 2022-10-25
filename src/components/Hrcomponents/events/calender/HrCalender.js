import React from "react";
import ContextWrapper from "./context/ContextWrapper";
import Calender from "./Calender";
const HrCalender = () => {
  return (
    <div>
      <ContextWrapper>
        <Calender />
      </ContextWrapper>
    </div>
  );
};

export default HrCalender;
