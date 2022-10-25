import React from "react";

import TableComponent from "../TableComponent";
import Dummydata from "../Dummydata";
const LeavesTable = () => {
  return (
    <div>
      <TableComponent initialState={Dummydata} title="my task list" />
    </div>
  );
};

export default LeavesTable;
