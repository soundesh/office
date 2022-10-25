import React from "react";
import Header from "../Header";
import "./dashboard.css";
import { Paper } from "@mui/material";
import NavbarHeader from "../NavbarHeader";
import CommonTable from "../../components/assitComponet/normaltable/CommonTable";
import Dashemptask from "../../component/employee/Dashemptask";
import ThismonthLeave from "../../components/Hrcomponents/HrHolidays/ThismonthLeave";
import { NavLink } from "react-router-dom";
const Data1 = [
  {
    id: "123",
    fromDate: "12/12/2021",
    endDate: "12/01/2021",
    approvel: "approved",
  },
  {
    id: "124",
    fromDate: "01/03/2022",
    endDate: "04/03/2022",
    approvel: "Reject",
  },
  {
    id: "125",
    fromDate: "01/04/2022",
    endDate: "02/05/2022",
    approvel: "pending",
  },
  {
    id: "126",
    fromDate: "12/06/2021",
    endDate: "12/01/2021",
    approvel: "approved",
  },

  {
    id: "125",
    fromDate: "01/04/2022",
    endDate: "02/05/2022",
    approvel: "approved",
  },
];

const Data2 = [
  {
    id: "123",
    Date: "12/12/2021",
    holiday: "ayudha poojai",
  },
  {
    id: "124",
    Date: "12/12/2021",
    holiday: "deepavali",
  },
  {
    id: "124",
    Date: "12/12/2021",
    holiday: "pongal",
  },
  {
    id: "125",
    Date: "12/12/2021",
    holiday: "thai pongal",
  },

  {
    id: "126",
    Date: "12/12/2021",
    holiday: "independence day",
  },
];
const inititalState1 = [
  {
    id: "1233",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    empremarks: " officedashboard screen office ui office ui office",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1231",
    taskdate: "07/10/2021",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1232",
    taskdate: "06/04/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "yes",
  },

  {
    id: "12331",
    taskdate: "25/12/2020",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "yes",
  },

  {
    id: "123312",
    taskdate: "08/10/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1233",
    taskdate: "14/10/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "yes",
  },
];

const DataHeader1 = ["From date", "end date", "Approval"];
const dataheader2 = ["date", "holiday"];
const empTaskheader = ["Project", "Task"];
const Dashboard = () => {
  return (
    <React.Fragment>
      <Paper>
        <div className="dashboard  min-h-[100vh] ">
          <div>
            <div>
              <Header
                pagehead="Dashboard"
                pageicon={<i className="material-icons">dashboard</i>}
              />
            </div>
          </div>
          <div className="mb-1">
            <NavbarHeader />
          </div>
          <div>
            <div className="max-h-[36vh] overflow-auto  mb-3">
              {inititalState1.length === 0 ? null : (
                <NavLink to="/emptask" className="hover:no-underline grow">
                  <Dashemptask
                    initialData={inititalState1}
                    headerData={empTaskheader}
                    title="Task"
                    Design=" min-h-[55vh] bg-white"
                  />
                </NavLink>
              )}
            </div>
            <div className="flex flex-wrap mb-1  overflow-auto ">
              <Paper>
                <NavLink to="/empleave" className="hover:no-underline  grow ">
                  <CommonTable
                    initialData={Data1}
                    headerData={DataHeader1}
                    title="Leave Status"
                    Design=" min-h-[45vh] bg-white drop-shadow-xl hover: drop-shadow-2xl"
                  />
                </NavLink>
              </Paper>

              <NavLink
                to="/empleave"
                className="hover:no-underline grow min-h-[100%]"
              >
                <CommonTable
                  initialData={Data2}
                  headerData={dataheader2}
                  title="Holiday leaves"
                  Design="min-h-[45vh] bg-white drop-shadow-xl hover: drop-shadow-2xl"
                />
              </NavLink>
              <NavLink
                to="/empleave"
                className="hover:no-underline grow min-h-[100%] drop-shadow-xl hover: drop-shadow-2xl"
              >
                <CommonTable
                  initialData={Data2}
                  headerData={dataheader2}
                  title="Holiday leaves"
                  Design="min-h-[45vh] bg-white "
                />
              </NavLink>
            </div>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Dashboard;
