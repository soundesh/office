import React from "react";
import "./Input.css";
const FromInupt = ({ Name, formed, tableData, ValueData }) => {
  return (
    <React.Fragment>
      <div className="searchdesign">
        <input
          type="text"
          name={Name}
          placeholder={Name}
          value={tableData}
          size="14"
          form={formed}
          onChange={ValueData}
        />
      </div>
    </React.Fragment>
  );
};

export default FromInupt;
