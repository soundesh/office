import React, { useState } from "react";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateIcon from "@mui/icons-material/Create";
const initialState = [
  {
    id: "121",
  },
];
const HrCustomerPaidtable = () => {
  const [Show, setShow] = useState();

  const [setuserRegShow] = useState(false);
  const [setEdit] = useState(false);

  const [setEditData] = useState();
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const result = allData.filter((item) => {
      const data = () => {
        for (const user in item) {
          if (item[user].includes(value)) {
            return item;
          }
        }
      };
      return data();
    });
    setFilteredData(result);
    return;
  };
  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== Object.values(deleteItem)[0];
      });
      setAllData(data);
      setFilteredData(data);
      console.log("You pressed OK!");
    }
  };

  const OnhandleEdit = (item) => {
    setEdit(true);
    setEditData(item);
    setuserRegShow(true);
  };

  return (
    <div className=" space-y-8 ">
      <Paper>
        <div className="flex flex-row items-center justify-between mx-2 ">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
              Payroll table
            </h1>
            <label htmlFor="search"></label>
            <Tooltip title="search">
              <input
                id="search"
                type="text"
                placeholder="search"
                size="12"
                className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                onChange={(event) => handleSearch(event)}
              />
            </Tooltip>
          </div>

          <div className="mr-3.5 flex flex-row items-center space-x-4 ">
            <div>
              <Tooltip title="show">
                <button
                  className="  flex  p-1 rounded-lg shadow hover:shadow-lg outline-hidden border-none  items-center"
                  onClick={() => {
                    setShow(!Show);
                  }}
                >
                  <p>show</p>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </Paper>
      <div
        className={
          Show
            ? "mt-2  overflow-auto Payrolllist p-2"
            : " h-[60vh] Payrolllist mt-1 overflow-auto p-2"
        }
      >
        <table className="HrPayrolltable ">
          <thead className="bg-red-300 ">
            <tr>
              <th>Name</th>

              <th>Role</th>

              <th>department</th>

              <th>Salary</th>
              <th>salary status</th>

              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {filteredData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div>
                      <Tooltip title="edit" onClick={() => OnhandleEdit(item)}>
                        <IconButton form="my_form1" type="submit">
                          <CreateIcon className="text-red-400" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Tooltip
                        title="Delete"
                        className="border-0"
                        onClick={() => onhandleDelete(item)}
                      >
                        <IconButton>
                          <DeleteOutlineIcon className="text-red-400" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrCustomerPaidtable;
