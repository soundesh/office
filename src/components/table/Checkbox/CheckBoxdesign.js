import React, { useState } from "react";
import "./checkbox.css";
const CheckBoxdesign = ({
  beforeClicked,

  ValueData,
  IDvaluecheck,
}) => {
  const [Checkbox, setCheckbox] = useState();
  return (
    <div className="checkinputboxcontainer">
      <input type="checkbox" className="checkboxcontainer" />
      <label className="container ">
        <input
          type="checkbox"
          name={IDvaluecheck}
          value={IDvaluecheck}
          onClick={ValueData}
        />
        <span
          style={
            Checkbox
              ? {
                  border: "2px solid white",
                  backgroundColor: `${beforeClicked}`,
                }
              : { border: `2px solid ${beforeClicked}` }
          }
          className="checkmark hover:bg-sky-700 "
          onClick={() => {
            setCheckbox(!Checkbox);
          }}
        ></span>
      </label>
    </div>
  );
};

export default CheckBoxdesign;
