import React from "react";

import Paper from "@mui/material/Paper";
const SelectorFrom = ({ labeled, sizewidth, OptionData, datavalue }) => {
  return ( 
   
      <div  className="px-1.5 ">
        <label htmlFor={labeled}>{labeled}:</label>
        <select
          name={labeled}
          id={labeled}
          value={datavalue}
          className={`w-${sizewidth} max-h-[200px] overflow-auto `}
        >
          {OptionData.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
  );
};

export default SelectorFrom;

//multilevel options

// <optgroup label="Swedish Cars">
// <option value="volvo">{Date} </option>
// <option value="saab">Saab</option>
// </optgroup>
// <optgroup label="German Cars">
// <option value="mercedes">Mercedes</option>
// <option value="audi">Audi</option>
// </optgroup>
