import React, { useState } from "react";
import Paper from "@mui/material/Paper";

const CreateAssigntask = ({ initialState, trigger, settrigger, today }) => {
  const [CreateTaskData, setCreateTaskData] = useState(initialState[0]);

  const onChangeCreate = (e) => {
    const { name, value } = e.target;
    setCreateTaskData({ ...CreateTaskData, [name]: value });
  };

  const ontaskCreateSubmit = (e) => {
    e.preventDefault();
    console.log("create task  ", CreateTaskData);
  };
  return (
    <div className="IdleAdd">
      <Paper>
        <div>
          <form method="GET" id="my_form2" onSubmit={ontaskCreateSubmit}>
            <div className="flex flex-row IdleAdd-inner bg-indigo-300 rounded-lg">
              <Paper elevation={10}>
                <button
                  className="close-btn bg-red-600 text-white  addEmpForm px-2 rounded-full"
                  onClick={() => {
                    settrigger(!trigger);
                  }}
                >
                  Close
                </button>
              </Paper>
              <div className="flex flex-row">
                <div className=" min-h-[8vh]  p-10 space-y-3 ">
                  <Paper elevation={8} className="min-w-[200px] flex  p-1 m-1">
                    <div className="flex items-center flex-row py-1 px-2 ">
                      <h3>Date </h3>
                      <div className="min-w-[70px] flex justify-center px-1">
                        : {today}
                      </div>
                    </div>
                  </Paper>
                  <Paper elevation={8} className="min-w-[300px] flex  p-1 m-1">
                    <div className="flex items-center flex-row py-1 px-2 ">
                      <h3>Task given</h3>
                      <div className="flex justify-center px-1">
                        : "anand rim[875]"
                      </div>
                    </div>
                  </Paper>

                  <Paper elevation={8} className="flex justify-center p-1 m-1">
                    <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                      <label htmlFor="empremarks" className="min-w-[100px]">
                        Project
                      </label>
                      <textarea
                        id="empremarks"
                        name="empremarks"
                        type="text"
                        rows="2"
                        cols="30"
                        form="my_form2"
                        placeholder="project name"
                        onChange={(e) => {
                          onChangeCreate(e);
                        }}
                        className="resize-none border-purple-800 rounded-md border-2 -ml-10"
                        maxLength="70"
                      ></textarea>
                    </div>
                  </Paper>
                  <Paper elevation={8} className="flex justify-center p-1 m-1">
                    <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                      <label htmlFor="empremarks" className="min-w-[110px]">
                        new Task
                      </label>
                      <textarea
                        id="empremarks"
                        name="empremarks"
                        type="text"
                        rows="2"
                        cols="30"
                        form="my_form2"
                        placeholder="new task "
                        onChange={(e) => {
                          onChangeCreate(e);
                        }}
                        className="resize-none border-purple-800 rounded-md border-2 -ml-10"
                        maxLength="70"
                      ></textarea>
                    </div>
                  </Paper>

                  <Paper elevation={8} className="flex justify-center p-1 m-1">
                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor=" taskassigned">employee assign</label>
                      <input
                        id="taskassigned"
                        type="text"
                        name="taskassigned"
                        form="my_form2"
                        placeholder="Employee Id"
                        size="16"
                        onChange={(e) => {
                          onChangeCreate(e);
                        }}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>
                  </Paper>

                  <Paper elevation={8} className="flex justify-center p-1 m-1">
                    <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                      <button
                        type="submit"
                        form="my_form2"
                        className="bg-indigo-300 px-2 px-2 rounded-full addEmpForm text-white hover:bg-red-300"
                        onClick={() => {
                          settrigger(!trigger);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </Paper>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default CreateAssigntask;
