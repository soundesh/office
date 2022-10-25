import React from "react";
import EmpLeaves from "./EmpLeaves";
import EmpLeaveDate from "./EmpLeaveDate";

const Data1 = [
  {
    id: "123",
    fromDate: "12/12/2021",
    endDate: "12/01/2021",
    approvel: "not approved",
  },
  {
    id: "124",
    fromDate: "01/03/2022",
    endDate: "04/03/2022",
    approvel: "not approved",
  },
  {
    id: "125",
    fromDate: "01/04/2022",
    endDate: "02/05/2022",
    approvel: "not approved",
  },
  {
    id: "126",
    fromDate: "12/06/2021",
    endDate: "12/01/2021",
    approvel: "not approved",
  },

  {
    id: "125",
    fromDate: "01/04/2022",
    endDate: "02/05/2022",
    approvel: "not approved",
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

const ProfileDetails = () => {
  return (
    <div className=" lg:flex lg:flex-row space-x-1 ">
      <div className="w-[33%]  mb-1">
        <EmpLeaves initialData={Data1} />
      </div>
      <div className="w-[33%]  mb-1">
        <EmpLeaveDate initialData={Data2} />
      </div>
    </div>
  );
};

export default ProfileDetails;
