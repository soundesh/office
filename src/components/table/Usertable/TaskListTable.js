import React from "react";

import TableComponent from "../TableComponent";
import Dummydata from "../Dummydata";
const TaskListTable = () => {
  return (
    <div>
      <TableComponent
        initialState={Dummydata}
        title="my task list"
        CheckDeletecolor="#FF1493"
      />
    </div>
  );
};

export default TaskListTable;
