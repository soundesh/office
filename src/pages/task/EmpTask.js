import React from "react";
import Header from "../Header";
import Emptasktable from "../../components/emptask/Emptasktable";
import NavbarHeader from "../NavbarHeader";
import CrudTable from "../../components/assitComponet/table/CrudTable";
import IdleADDing from "./IdleADDing";
import EmptaskEdit from "./EmptaskEdit";
const inititalState1 = [
  {
    id: "1230",
    taskdate: "06/10/2022",
    taskgiven: "soundesh",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1231",
    taskdate: "06/10/2022",
    taskgiven: "soundesh",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
  {
    id: "1232",
    taskdate: "06/10/2022",
    taskgiven: "parimala",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
  {
    id: "1233",
    taskdate: "06/10/2022",
    taskgiven: "saranya",
    project: "331 inspirational designs,",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1234",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
  {
    id: "1235",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1235",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
  {
    id: "1235",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
  {
    id: "1235",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
  {
    id: "1235",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    empremarks: " officedashboard screen office ui office ui office",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },
];
const headerstate = [
  "id",
  "Task date",
  "Task Given",
  "Project",
  "Task",
  "Task Assigned",
  "Approver Remarks",
  "Employee Remarks",
  "Worked Hours",
  "Clocked Hours",
  "Utilised Hours",
  "Efficiency",
  "Status",
];

const EmpTask = () => {
  return (
    <div className="ml-1 bg-slate-100">
      <div>
        <Header
          pagehead="employee task"
          pageicon={<i className="fa fa-users" aria-hidden="true"></i>}
          viewEdit={EmptaskEdit}
        />
      </div>
      <div>
        <NavbarHeader />
      </div>


      <div>
        <CrudTable
          initialData={inititalState1}
          headerData={headerstate}
          title="Leave Status"
          Design="bg-white  text-xs"
          tableheight="max-h-[90vh]"
          tableDesign=""
          Adding={true}
          editing={true}
          viewing={true}
          CheckDeletecolor="bg-red-400"
          Addingcomponent={IdleADDing}
          ViewEdit={EmptaskEdit}

        />
      </div>
{/*    
      <div>
        <Emptasktable
          initialState={inititalState1}
          title="Task"
          headerState={headerstate}
          CheckDeletecolor="pink"
        />
      </div> */}
    </div>
  );
};

export default EmpTask;
