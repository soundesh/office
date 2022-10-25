import React, { useState } from "react";
import { Tooltip } from "@mui/material";
// const Data = [
//   { fromDate: "12/12/2021", endDate: "12/01/2022", approvel: "not approved" },
//   { fromDate: "12/12/2021", endDate: "12/01/2022", approvel: "not approved" },
//   { fromDate: "12/12/2021", endDate: "12/01/2022", approvel: "not approved" },
//   { fromDate: "12/12/2021", endDate: "12/01/2022", approvel: "not approved" },
//   { fromDate: "12/12/2021", endDate: "12/01/2022", approvel: "not approved" },
// ];

const EmpLeaves = ({ initialData }) => {
  const [initialState] = useState(initialData);
  return (
    <div className="boxDataShdow rounded-lg   min-h-52 h-56 min-w-[270px]  ">
      <h1 className="flex justify-center mb-2 text-xl">leave status</h1>
      <div className="  rounded-3xl flex flex-row space-x-2 flex justify-center  items-center">
        <div className="rounded-lg space-y-3 h-36 overflow-auto overflow-hidde mt-2 mb-3  w-full ">
          <table className="min-w-[350px]">
            <thead className="bg-indigo-200">
              <tr>
                {Object.keys(initialState[0]).map((item, index) => {
                  if (Object.keys(item)[0] === Object.keys(item)[index]) {
                    return <React.Fragment key={index}></React.Fragment>;
                  }
                  return (
                    <th
                      className=" font-serif leading-5 font-medium italic hover:not-italic"
                      key={index}
                    >
                      <p className="border-2   rounded-lg py-1 grid justify-items-center ">
                        {item}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {initialState.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.keys(item).map((data, index) => {
                      if (Object.keys(item)[0] === Object.keys(item)[index]) {
                        return <React.Fragment key={index}></React.Fragment>;
                      }
                      return (
                        <Tooltip
                          key={index}
                          title={`${Object.keys(item)[index]}`}
                        >
                          <td className="leading-4">
                            <p className="border-2   rounded-lg  grid justify-items-center ">
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
    </div>
  );
};

export default EmpLeaves;
