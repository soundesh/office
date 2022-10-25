import React from "react";
import Office from "../img/Office2.png";
const OfficeIcon = () => {
  return (
    <div className="flex flex-row ml-2 mt-4 ">
      <div>
        <img src={Office} width="40" height="60" alt="office" />
      </div>
      <div className="text-justify text-lg font-mono  font-black">
        <h2>ffice</h2>
        <h2>onnect</h2>
      </div>
    </div>
  );
};

export default OfficeIcon;
