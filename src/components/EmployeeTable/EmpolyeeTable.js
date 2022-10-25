import React, { useState } from "react";
import "./EmpolyeeTable.css";
import Tableheader from "../assitComponet/Tableheader";
import Tooltip from "@mui/material/Tooltip";
const EmpolyeeTable = ({ initialData, title }) => {
  const [initialState] = useState(initialData);
  return (
    <div style={{ borderRadius: 20 }} className="w-[99.5%] ml-1 ">
      <h1 className="flex justify-center bg-white h-8 items-center text-xl border-2 border-indigo-300 my-1">
        {title}
      </h1>
      <div className="mb-1 h-64 overflow-auto ">
        <table className="Emptable min-w-[1800px]">
          <thead className=" py-2">
            <tr>
              <Tableheader
                initialState={initialState[0]}
                theadColor="bg-indigo-400"
              />
            </tr>
          </thead>
          <tbody>
            {initialState.map((item, index) => {
              return (
                <tr key={index}>
                  {Object.keys(item).map((data, index) => {
                    if (Object.keys(item)[0] === Object.keys(item)[index]) {
                      return <td key={index}></td>;
                    }
                    return (
                      <Tooltip
                        key={index}
                        title={`${Object.keys(item)[index]}`}
                      >
                        <td>
                          <p className="border-2 rounded-lg py-2 grid justify-items-center ">
                            {item[data]}
                          </p>
                        </td>
                      </Tooltip>
                    );
                  })}
                  <td className="flex flex-row"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpolyeeTable;
