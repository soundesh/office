import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidelistbar from "./Sidelistbar";

const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <i className="material-icons">dashboard</i>,
  },
  {
    path: "/emptask",
    name: "employee task",
    icon: <i className="fa fa-briefcase"></i>,
    list: {},
  },

  {
    path: "/empleave",
    name: "leaves & holidays ",
    icon: <i className="fas fa-calendar-days"></i>,
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
  },

  {
    path: "/hrdashboard",
    name: "Hr Dashboard",
    icon: <i className="material-icons">dashboard</i>,
  },

  {
    name: "Users",
    icon: <i className="fa fa-users"></i>,
    path: "/hruser",
    totalData: "865",
  },
  {
    name: "Holidays",
    icon: <i className="fa fa-thumbs-up text-3xl" aria-hidden="true"></i>,
    path: "/hrholidays",
    totalData: "0",
  },
  {
    name: "Events",
    icon: <i className="fas fa-calendar-days"></i>,
    path: "/hrevents",
    totalData: "0",
  },
  {
    name: "Payroll",
    icon: <i className="fa fa-credit-card-alt" aria-hidden="true"></i>,
    path: "/hrpayroll",
    totalData: "0",
  },
  {
    name: "Accounts",
    icon: <i className="fa fa-calculator" aria-hidden="true"></i>,
    path: "/hraccounts",
    totalData: "0",
  },

  {
    name: "Charts",
    icon: <i className="fa-sharp fa-solid fa-chart-simple"></i>,
    path: "/hrCharts",
    totalData: "0",
  },
  {
    name: "Reports",
    icon: <i className="fa fa-exclamation-circle" aria-hidden="true"></i>,
    path: "/hrreports",
    totalData: "0",
  },
];
const menuItem1 = [
  {
    path: "/product",
    name: "Product",
    icon: <i className="material-icons">settings</i>,
  },
  {
    path: "/productList",
    name: "Product List",
    icon: <i className="material-icons">logout</i>,
  },
  {
    path: "/forgot",
    name: "Product List",
    icon: <i className="material-icons">logout</i>,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [usingPath, setUsingPath] = useState();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="container1 bg-slate-100 overflow-y-auto ">
        <div className="sidebar">
          <div>
            {menuItem.map((item, index) => (
              <NavLink
                onClick={() => setUsingPath(item.path)}
                to={item.path}
                key={index}
                className="link"
              >
                <div className="icon">{item.icon}</div>
              </NavLink>
            ))}
          </div>
          <div className="sidebarSetting">
            {menuItem1.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                onClick={() => setUsingPath(item.path)}
                className="link"
              >
                <div className="icon">{item.icon}</div>
              </NavLink>
            ))}
          </div>
        </div>
        {isOpen ? <Sidelistbar usingPath={usingPath} /> : null}
        <button onClick={toggle} className="sidebarBtn">
          <span className="dash-icon-arrow flex flex-end">
            <i className="material-icons animate-spin">settings</i>
          </span>
        </button>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
