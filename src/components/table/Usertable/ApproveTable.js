import React from "react";
import TableComponent from "../TableComponent";

const inititalState3 = [
  {
    id: "1200",
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "null",
  },

  {
    id: "1201",
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "null",
  },

  {
    id: "1202",
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "null",
  },

  {
    id: "1203",
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "null",
  },

  {
    id: "1204",
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "null",
  },
];

const ApproveTable = () => {
  return (
    <div>
      <TableComponent
        initialState={inititalState3}
        title="my task list"
        CheckDeletecolor="#8B0000"
      />
    </div>
  );
};

export default ApproveTable;
