import React from "react";
import Header from "../Header";
import ProfileCard from "../../components/profileComponet/ProfileCard";
import EmpYearLeave from "../../components/OfficeLeave/EmpYearLeave";
import OfficeYearLeave from "../../components/OfficeLeave/OfficeYearLeave";
import EmpLeaveTable from "../../components/OfficeLeave/EmpLeaveTable";
import ThismonthLeave from "../../components/Hrcomponents/HrHolidays/ThismonthLeave";
const inititalState2 = [
  {
    id: "1200",
    user: `anand`,
    empId: "[RIM-876]",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali fhghfgfgg",
    reasonleave:
    "Here are some casual leave samples for employees. Using these samples",

    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "1234",
    user: `soundesh`,
    empId: "[RIM-876]",
    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "CL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "1223",
    user: `ragu`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "2332",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "23425",
    user: `anand`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "23345642",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",

    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "2335462",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",
    reasonleave: "heart ATTACK comes faster it will happened from this date",
    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },

  {
    id: "23546432",
    user: `shyam`,
    empId: "[RIM-876]",

    date: "06/10/2022",
    from: "2022-10-08",
    to: "2022-10-11",
    lop: `0`,
    Days: `3`,
    leaveType: "EL",
    reason: "dewali",

    reasonleave: "heart ATTACK comes faster it will happened from this date",
    "L1 aprover and reamarks": "sandeep :approvedsandeep",
    "L2 aprover and reamarks": "parimala",
    "L3 aprover and reamarks": "approved",
  },
];


const headerdata=[ { "id":"",
"User":"",
"EmpId":"",
"Date":"",
"From":"",
"To":"",
"Lop":"",
"Days":"",
"Leave Type":"",
"Reason":"",
"Reason Leave":
"Here are some casual leave samples for employees. Using these samples",

"L1 aprover and reamarks": "sandeep :approvedsandeep",
"L2 aprover and reamarks": "parimala",
"L3 aprover and reamarks": "approved"}]
const EmpLeaveSchedule = () => {
  return (
    <div>
      <div>
        <Header
          pagehead="Leave Maintenance"
          pageicon={<i className="fa fa-table"></i>}
        />
      </div>
      {/* <div className="flex flex-row space-x-1 mb-1 rounded-lg ">
        <div className="bg-white flex rounded-lg">
          <EmpYearLeave />
        </div>
        <div className="bg-white rounded-lg">
          <ThismonthLeave />
        </div>
        <div className="bg-white rounded-lg">
          <OfficeYearLeave />
        </div>
      </div> */}

      <div>
        <EmpLeaveTable
          initialState={inititalState2}
          title="leave maintaince"
          headerState={headerdata[0]}
          CheckDeletecolor="pink"
        />
      </div>
    </div>
  );
};

export default EmpLeaveSchedule;
