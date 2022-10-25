import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HrImg from "./loginimage/hrfemale.png";
const Login = () => {
  const [loginData, setLoginData] = useState({
    empId: "",
    password: "",
  });

  const loginevent = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  };
  const ontaskCreateSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="lg:relative md:relative bg-slate-200 flex flex-column  datalist space-y-5 min-h-[100vh] bg-white">
      <div className="text-3xl font-bold">
        RIM India Private Limited (HR management)
      </div>
      <div className=" flex flex-row rounded-2xl lg:p-1 lg:min-h-[90vh] lg:m-1 ">
        <img
          src={HrImg}
          className="object-fill lg:min-h-[90vh] rounded-3xl "
          alt="login img"
        />
      </div>

      <div className="flex flex-column items-center  justify-center rounded-3xl max-w-[20%]  lg:min-w-[35%]  bg-white lg:min-h-[60vh] lg:hover:shadow-md lg:shadow-2xl  lg:absolute md:absolute  top-0 md:top-20 lg:mt-20 lg:mr-32  right-0">
        <form className="lg:p-2 space-y-3 mb-3">
          <div className="border-3 border-gray-300 p-2 rounded-full  flex items-center  justify-center shadow-md hover:shadow-2xl  bg-indigo-300  focus:outline-none">
            <i className="fa-solid fa-user bg-white p-1  rounded-full "></i>
            <label
              htmlFor="empId"
              className="min-w-[80px] text-xl font-semibold flex justify-end "
            >
              User Id
            </label>
            <input
              id="empId"
              type="text"
              name="empId"
              placeholder="please enter "
              size="14"
              required
              className=" px-3 py-1.5  m-2 outline-none border-2 "
              onChange={(e) => {
                loginevent(e);
              }}
            />
          </div>
          <div className="border-3 border-gray-300 p-2 rounded-full justify-center  flex items-center shadow-md hover:shadow-2xl  bg-indigo-300  focus:outline-none">
            <i className="fa-solid fa-lock bg-white p-1 rounded-full  "></i>
            <label
              htmlFor="password"
              className="min-w-[80px] flex justify-end  text-xl font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="please enter "
              size="14"
              required
              className=" px-3 py-1.5 py-2  m-2 outline-none border-2 "
              onChange={(e) => {
                loginevent(e);
              }}
            />
          </div>
          <div className="flex justify-center px-4">
            <button
              type="submit"
              onClick={(e) => {
                ontaskCreateSubmit(e);
              }}
              className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl bg-indigo-300 focus:outline-none"
            >
              <span className="pl-3 pr-7 font-bold ">
                Login
                <span className="pl-3 ">
                  <i className="fa-sharp fa-solid fa-arrow-right-to-bracket  bg-white  p-1 rounded-full border-2 border-red-300"></i>
                </span>
              </span>
            </button>
          </div>
        </form>
        <NavLink to="/forgot">
          <h1 className="font-xl text-purple-400  shadow-2xl  ">
            forgot password
            <i className="fa-sharp fa-solid fa-arrow-right pl-2 "></i>
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
