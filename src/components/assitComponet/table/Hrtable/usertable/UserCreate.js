import { Paper } from "@mui/material";
import React, { useState } from "react";
import "./Hrusertable.css";
const UserCreate = ({ settrigger, trigger, editor, editData }) => {
  const [CreateTaskData, setCreateTaskData] = useState(() => {
    if (editor) {
      return editData;
    } else {
      return {
        empId: "",
        fristName: "",
        LastName: "",
        username: "",
        userImg: "",
        email: "",
        mobile: "",
        role: "",
        joinDate: "",
        password: "",
        confirmpassword: "",
      };
    }
  });

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

  console.log(trigger);
  return (
    <div className="IdleAdd ">
      <Paper>
        <div className="IdleAdd-inner bg-pink-400">
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
          <form onSubmit={ontaskCreateSubmit}>
            <div className="bg-pink-400">
              <Paper elevation={8} className="flex  justify-center p-1 m-1">
                <div className="flex flex-row items-center mt-4 ">
                  <div className="flex flex-column ">
                    <div className=" addEmpForm flex items-center flex-row py-1 px-2 ">
                      <label htmlFor="empId" className="min-w-[100px]">
                        employee id
                      </label>
                      <input
                        id="empId"
                        type="text"
                        name="empId"
                        defaultValue={CreateTaskData.empId}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>

                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor=" fristName" className="min-w-[100px]">
                        Frist Name
                      </label>
                      <input
                        id=" fristName"
                        type="text"
                        name=" fristName"
                        defaultValue={CreateTaskData.fristName}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>

                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor="email" className="min-w-[100px]">
                        email id
                      </label>
                      <input
                        id=" email"
                        type="email"
                        name=" email"
                        placeholder="please enter "
                        defaultValue={CreateTaskData.email}
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>

                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor="role" className="min-w-[100px]">
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        name="role"
                        defaultValue={CreateTaskData.role}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>
                    <div className="flex flex-row items-center ">
                      <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                        <label htmlFor="password" className="min-w-[100px]">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="please enter "
                          defaultValue={CreateTaskData.password}
                          required
                          onChange={(e) => onChangeCreate(e)}
                          className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor="username" className="min-w-[110px]">
                        User Name
                      </label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="please enter "
                        defaultValue={CreateTaskData.username}
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>
                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor="LastName" className="min-w-[110px]">
                        Last Name
                      </label>
                      <input
                        id="LastName"
                        type="text"
                        name="LastName"
                        defaultValue={CreateTaskData.LastName}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>
                    <div className=" addEmpForm flex items-center  flex-row py-1 px-3">
                      <label htmlFor="mobile" className="min-w-[110px]">
                        mobile
                      </label>
                      <input
                        id="mobile"
                        type="text"
                        name="mobile"
                        defaultValue={CreateTaskData.mobile}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1"
                      />
                    </div>
                    <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                      <label htmlFor="joinDate" className="min-w-[110px]">
                        create Date
                      </label>
                      <input
                        id="joinDate"
                        type="text"
                        name="joinDate"
                        defaultValue={CreateTaskData.userDate}
                        placeholder="please enter "
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                      />
                    </div>
                    <div className=" addEmpForm flex items-center  flex-row py-1 px-3 ">
                      <label
                        htmlFor="confirmpassword"
                        className="min-w-[100px]"
                      >
                        confirm
                      </label>
                      <input
                        id="confirmpassword"
                        type="password"
                        name="confirmpassword"
                        placeholder="please enter "
                        defaultValue={CreateTaskData.confirmpassword}
                        required
                        onChange={(e) => onChangeCreate(e)}
                        className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
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
                  {editor ? "update" : "submit"}
                </button>
              </div>
            </Paper>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default UserCreate;
