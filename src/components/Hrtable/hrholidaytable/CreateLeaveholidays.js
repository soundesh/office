import { Paper } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../assitComponet/Dropdown";
import "./Hrholidays.css";
const CreateLeaveholidays = ({
  settrigger,
  trigger,
  editor,
  editData,
  onhandleDelete,
  deletetrigger,
  setdeletetrigger,
}) => {
  const [CreateTaskData, setCreateTaskData] = useState(() => {
    if (editor) {
      return editData;
    } else {
      return {
        leavedate: "",
        leavetype: "",
        holiday: "",
      };
    }
  });

  console.log(editData);

  const onChangeCreate = (e) => {
    const { name, value } = e.target;
    setCreateTaskData({ ...CreateTaskData, [name]: value });
  };
  const ontaskCreateSubmit = (e) => {
    e.preventDefault();
    if (editor) {
      console.log("update");
    } else {
      console.log("submit");
    }
  };

  //create data list dropdown
  const LeavetypeArray = ["Festival", "RH", "General", "National"];
  return (
    <div className="IdleAdd ">
      <Paper>
        <div className="IdleAdd-inner bg-pink-400">
          <Paper elevation={10}>
            <button
              className="close-btn bg-red-600 text-white p-1 addEmpForm px-2 rounded-full"
              onClick={() => settrigger(!trigger)}
            >
              Close
            </button>
          </Paper>
          <form onSubmit={ontaskCreateSubmit}>
            <div className="bg-pink-400 ">
              <Paper elevation={8} className="flex  justify-center p-1 m-1">
                <div className="flex flex-row items-center mt-4 p-4">
                  <div className="flex flex-column ">
                    <div className=" addEmpForm flex items-center flex-row py-1 px-2 hover:border-2  ">
                      <label htmlFor="leavedate" className="min-w-[100px]">
                        Holiday
                      </label>
                      <input
                        id="leavedate"
                        type="text"
                        name="leavedate"
                        defaultValue={CreateTaskData.holiday}
                        placeholder="please enter "
                        size="13"
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className=" px-3 py-1.5  m-2 outline-none border-2 "
                      />
                    </div>

                    <div className=" addEmpForm flex items-center hover:border-2 flex-row py-1 px-2 ">
                      <label htmlFor="leavedate" className="min-w-[100px]">
                        Holiday Date
                      </label>
                      <input
                        id="leavedate"
                        type="date"
                        name="leavedate"
                        defaultValue={CreateTaskData.leavedate}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="cssinput px-3 py-1 w-44 m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>

                    <div className=" flex items-center hover:rounded-lg hover:border-2 flex-row py-1 px-2 ">
                      <label htmlFor="empId" className="min-w-[100px]">
                        Leave Type
                      </label>
                      <Dropdown
                        listData={LeavetypeArray}
                        cssdata={
                          "  ml-1 w-[180px] rounded-lg border-2  border-amber-800"
                        }
                        selecting={CreateTaskData}
                        name="leavetype"
                        setSelecting={setCreateTaskData}
                      />
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
            <Paper elevation={8} className="flex justify-center p-1 ">
              <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                <button
                  type="submit"
                  className="bg-indigo-400 px-4 py-2 rounded-full addEmpForm text-white hover:bg-red-300"
                >
                  {editor ? "update" : "Create"}
                </button>

                <div onClick={() => onhandleDelete(editData)}>
                  {editor ? (
                    <div className="bg-red-500 px-4 py-2 m-3 rounded-full addEmpForm text-white hover:bg-red-300">
                      Delete
                    </div>
                  ) : null}
                </div>
              </div>
            </Paper>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default CreateLeaveholidays;
