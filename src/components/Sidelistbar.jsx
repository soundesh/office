import React from "react";

import OfficeIcon from "./OfficeIcon";
const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    list: {
      0: "Add/Remove items",
      1: "Request/Approval",
      2: "create tasks",
    },
    //list: { 0: "Alex", 1: "Bob", 2: "Johny", 3: "Atta" },
  },
  {
    path: "/emptask",
    name: "leaves & holidays ",
    icon: <i className="fas fa-calendar-days"></i>,
    list: {},
  },

  {
    path: "/empleave",
    name: "employee task",
    icon: <i className="fa fa-briefcase" aria-hidden="true"></i>,
    list: {},
  },

  {
    path: "/assigntask",
    name: "Analytics",
    icon: <i className="fa-regular fa-clipboard"></i>,
  },
  {
    path: "/comment",
    name: "Comment",
    icon: <i className="fas fa-calendar-days"></i>,
    list: {},
  },
  {
    path: "/product",
    name: "Product",
    icon: <i className="material-icons">settings</i>,
    list: {},
  },
  {
    path: "/productList",
    name: "Product List",
    icon: <i className="material-icons">logout</i>,
    list: {},
  },
  {
    path: "/hrdashboard",
    name: "Dashboard",
    list: {
      0: "Add/Remove items",
      1: "Request/Approval",
      2: "create tasks",
    },
    //list: { 0: "Alex", 1: "Bob", 2: "Johny", 3: "Atta" },
  },
  {
    name: "Users",
    icon: <i className="fa fa-users"></i>,
    path: "/hruser",
    totalData: "865",
    list: {},
  },
  {
    name: "Holidays",
    icon: <i className="fa fa-thumbs-up text-3xl" aria-hidden="true"></i>,
    path: "/hrholidays",
    totalData: "0",
    list: {},
  },
  {
    name: "Events",
    icon: <i className="fa fa-calendar" aria-hidden="true"></i>,
    path: "/hrevents",
    totalData: "0",
    list: {},
  },
  {
    name: "Payroll",
    icon: <i className="fa fa-credit-card-alt" aria-hidden="true"></i>,
    path: "/hrpayroll",
    totalData: "0",
    list: {},
  },
  {
    name: "Accounts",
    icon: <i className="fa fa-calculator" aria-hidden="true"></i>,
    path: "/hraccounts",
    totalData: "0",
    list: {},
  },
  {
    name: "Charts",
    icon: <i className="fa-sharp fa-solid fa-chart-simple"></i>,
    path: "/hrCharts",
    totalData: "0",
    list: {},
  },
  {
    name: "Reports",
    icon: <i className="fa fa-exclamation-circle" aria-hidden="true"></i>,
    path: "/hrreports",
    totalData: "0",
    list: {},
  },
];
const Sidelistbar = ({ usingPath }) => {
  return (
    <div className="top p-3">
      <OfficeIcon />
      {menuItem.map((user) => {
        return user.path === window.location.pathname ? (
          <div key={user.path}>
            <h1>My {user.name}</h1>
            <ul>
              {Object.values(user.list)?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Sidelistbar;
