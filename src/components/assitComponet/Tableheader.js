import React from "react";

const Tableheader = ({ initialState, theadColor }) => {
  return (
    <React.Fragment>
      {Object.keys(initialState).map((item, index) => {
        if (Object.keys(item)[0] === Object.keys(item)[index]) {
          return <th key={Object.values(item)}></th>;
        }
        return (
          <th key={index} className=" text-sm font-light headerfont">
            <p className="border-2  rounded-lg py-2 grid justify-items-center ">
              {item}
            </p>
          </th>
        );
      })}
    </React.Fragment>
  );
};

export default Tableheader;
