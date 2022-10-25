import React, { useState } from "react";

import SelectorFrom from "../../components/assitComponet/SelectorFrom";
import Paper from "@mui/material/Paper";
import "./idleAdd.css";
const IdleADDing = ({ initialState, trigger, settrigger }) => {
  const [updateTaskData, setUpdateTaskData] = useState(initialState[0]);

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({ ...updateTaskData, [name]: value });
  };

  const ontaskUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("emp task update ", updateTaskData);
  };

  const project = ["Office ui", "office data", "3d cad website"];
  return (
    <div className="IdleAdd">
      <Paper>
        <div>
          <form method="GET" id="my_form2" onSubmit={ontaskUpdateSubmit}>
            <div className="flex flex-row IdleAdd-inner bg-white-300">
              <div className=" min-h-[8vh]  p-10 space-y-3 ">
                <div className="close-btn btnFocus inline-block bg-red-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  <button
                    type="button"
                    className="btnFocus px-6 py-2.5 "
                    onClick={() => {
                      settrigger(!trigger);
                    }}
                  >
                    Close
                  </button>
                </div>
                <div className=" addEmpForm flex py-1 px-2 items-center ">
                  <h1 className="flex justify-center mr-2 px-1">
                    Add idle work
                  </h1>
                  <SelectorFrom
                    labeled="Project"
                    OptionData={project}
                    sizewidth="5"
                    Date="18 oct 2021"
                  />
                </div>

                <div className=" addEmpForm flex py-1 px-2 items-center ">
                  <label htmlFor=" worked">worked Hours</label>
                  <input
                    id=" worked"
                    type="text"
                    name=" worked"
                    form="my_form2"
                    placeholder=" worked hours "
                    size="4"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                  />
                </div>

                <div className=" addEmpForm flex py-1 px-2 items-center ">
                  <label htmlFor="clocked">clocked Hours</label>
                  <input
                    id="clocked"
                    type="text"
                    name="clocked"
                    form="my_form2"
                    placeholder="clocked hours"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    size="4"
                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                  />
                </div>

                <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                  <label htmlFor=" utilised">utilised Hours</label>
                  <input
                    id=" utilised"
                    type="text"
                    name=" utilised"
                    form="my_form2"
                    placeholder=" utilised hours"
                    size="4"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                  />
                </div>

                <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                  <label htmlFor="empremarks" className="w-20">
                    Employee Remarks
                  </label>
                  <textarea
                    id="empremarks"
                    name="empremarks"
                    type="text"
                    rows="2"
                    cols="30"
                    form="my_form2"
                    placeholder="employee remarks about project task"
                    onChange={(e) => {
                      onChangeUpdate(e);
                    }}
                    className="resize-none border-amber-800 rounded-md border-2 "
                    maxLength="70"
                  ></textarea>
                </div>

                <div className="flex  items-center justify-center flex-row py-1 px-1  ">
                  <div className=" btnFocus inline-block bg-blue-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <button
                      type="submit"
                      form="my_form2"
                      className="btnFocus px-6 py-2.5 "
                      onClick={() => {
                        settrigger(!trigger);
                      }}
                    >
                      Create Idle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default IdleADDing;
