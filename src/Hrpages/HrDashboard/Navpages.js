import React from "react";
import "./Hrdashboard.css";
import { NavLink } from "react-router-dom";
const Navpages = () => {
  const pagelinkelist = [
    {
      name: "Users",
      icon: <i className="fa fa-users"></i>,
      path: "/hruser",
      totalData: "865",
    },
    {
      name: "Holidays",
      icon: <i className="fa fa-thumbs-up text-3xl"></i>,
      path: "/hrholidays",
      totalData: "0",
    },
    {
      name: "Events",
      icon: <i className="fa fa-calendar"></i>,
      path: "/hrevents",
      totalData: "0",
    },
    {
      name: "Payroll",
      icon: <i className="fa fa-credit-card-alt"></i>,
      path: "/hrpayroll",
      totalData: "0",
    },
    {
      name: "Accounts",
      icon: <i className="fa fa-calculator"></i>,
      path: "/hraccounts",
      totalData: "0",
    },
    {
      name: "Reports",
      icon: <i className="fa fa-exclamation-circle"></i>,
      path: "/hrreports",
      totalData: "0",
    },
  ];
  return (
    <div className="flex flex-row w-full ">
      {pagelinkelist.map((item, index) => {
        return (
          <div
            className="datalist text-green-600 bg-lime-200 addEmpForm flex flex-column "
            key={index}
          >
            <NavLink to={item.path} className="links datalistrelated">
              <h1 className="text-2xl   text-blue-600 pl-2  ">
                {item.totalData}
              </h1>
              <div className="text-3xl hover:text-4xl">{item.icon}</div>
              <span>{item.name}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Navpages;
