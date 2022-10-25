import React, { useState, useContext } from "react";
import MaterialTable from "material-table";
import "./table.css";
import axios from "axios";
import { GlobalState } from "../../GlobalState";

const projectname = "projectname1";
const taskname = "taskname1";
const remarks = "creating dashboard";
const worked = "3";
const utilised = "8.3";
const columns = [
  {
    title: `project:${projectname}`,
    field: "project",
    cellStyle: {
      cellWidth: "5%",
    },
  },
  {
    title: `task:${taskname}`,
    field: "task",
    cellStyle: {
      cellWidth: "5%",
    },
  },
  {
    title: `remarks:${remarks}`,
    field: "remarks",
    cellStyle: {
      cellWidth: "5%",
    },
  },
  {
    title: `worked hours:${worked}`,
    field: "worked",
    cellStyle: {
      cellWidth: "5%",
    },
  },

  {
    title: `clocked hours:${worked}`,
    field: "clocked",
    cellStyle: {
      cellWidth: "5%",
    },
  },
  {
    title: `utilised hours:${utilised}`,
    field: "utilised",
    cellStyle: {
      cellWidth: "5%",
    },
  },
  {
    title: "efficientcy",
    field: "efficienty",
    cellStyle: {
      cellWidth: "5%",
    },
  },
];

const columns1 = [
  { title: " ", field: "name" },
  { title: " ", field: "project" },
  { title: " ", field: "task" },
  { title: " ", field: "remarks" },
  { title: " ", field: "worked" },
  { title: " ", field: "clocked" },
  { title: " ", field: "utilised" },
  { title: " ", field: "efficienty" },
];

const columns2 = [
  { title: `Name`, field: "user" },
  { title: `Applying Date:${taskname}`, field: "Date" },
  { title: `From:${remarks}`, field: "from" },
  { title: `To:${worked}`, field: "to" },
  { title: `Days:${utilised}`, field: "Days" },
  { title: `lop:${utilised}`, field: "lop" },
  { title: `Perticular:${utilised}`, field: "particular" },
  { title: `L1 approved`, field: "l1" },
  { title: `L2 approved`, field: "l2" },
  { title: `Hr approved`, field: "hr" },
];

const inititalState2 = [
  {
    user: `anand`,
    Date: `13th oct 2021`,
    from: `01 nov 2021`,
    to: `02 nov 2021`,
    Days: `3`,
    lop: `0`,
    particular: `dewali`,
    l1: "sandeep :approved",
    l2: "parimala",
    hr: "approved",
  },

  {
    user: `anand`,
    Date: `13th oct 2021`,
    from: `01 nov 2021`,
    to: `02 nov 2021`,
    Days: `3`,
    lop: `0`,
    particular: `dewali`,
    l1: "sandeep :approved",
    l2: "parimala",
    hr: "approved",
  },

  {
    user: `anand`,
    Date: `13th oct 2021`,
    from: `01 nov 2021`,
    to: `02 nov 2021`,
    Days: `3`,
    lop: `0`,
    particular: `dewali`,
    l1: "sandeep :approved",
    l2: "parimala",
    hr: "approved",
  },

  {
    user: `anand`,
    Date: `13th oct 2021`,
    from: `01 nov 2021`,
    to: `02 nov 2021`,
    Days: `3`,
    lop: `0`,
    particular: `dewali`,
    l1: "sandeep :approved",
    l2: "parimala",
    hr: "approved",
  },

  {
    user: `anand`,
    Date: `13th oct 2021`,
    from: `01 nov 2021`,
    to: `02 nov 2021`,
    Days: `3`,
    lop: `0`,
    particular: `dewali`,
    l1: "sandeep :approved",
    l2: "parimala",
    hr: "approved",
  },
];
const columns3 = [
  { title: `title`, field: "title" },
  { title: `Date applied`, field: "Date" },
  { title: `from`, field: "from" },
  { title: `to`, field: "to" },

  {
    title: `amount`,
    field: "amount",
    type: "currency",
    currencySetting: { currencyCode: "INR" },
  },

  { title: `cliam type`, field: "claim" },

  { title: `status`, field: "status" },

  { title: `remarks`, field: "remarks" },
];

const inititalState3 = [
  {
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "  ",
  },

  {
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "  ",
  },

  {
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "  ",
  },

  {
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "  ",
  },

  {
    title: "chennai travel",
    Date: "12 nov",
    from: "01 nov oct",
    to: "05 nov 22",
    amount: "3000",
    claim: "travel allowance",
    status: "green approved",
    remarks: "  ",
  },
];

const inititalState = [
  {
    project: "office ui",
    task: "time screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficienty: "efficienty:100%",
  },

  {
    project: "connect office ui",
    task: "talk screen",
    remarks: "creating dash board",
    worked: "7",
    clocked: "8",
    utilised: "8.30",
    efficienty: "efficienty:100%",
  },

  {
    project: "cartoon ui",
    task: "flash dashboard screen",
    remarks: "creating dash board",
    worked: "4",
    clocked: "1",
    utilised: "8.30",
    efficienty: "efficienty:100%",
  },

  {
    project: "3d ui",
    task: "rim screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "6",
    utilised: "2.30",
    efficienty: "efficienty:100%",
  },
  {
    project: "faced  ui",
    task: "dad screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "4.30",
    efficienty: "efficienty:100%",
  },

  {
    project: "login ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "3",
    utilised: "4.30",
    efficiency: "efficiency:100%",
  },
];
const username = "soundesh";
const inititalState1 = [
  {
    name: `${username}`,
    project: "office ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
  },

  {
    name: `${username}`,
    project: "office ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
  },

  {
    name: `${username}`,
    project: "office ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
  },

  {
    name: `${username}`,
    project: "office ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
  },

  {
    name: `${username}`,
    project: "office ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
  },

  {
    name: `${username}`,
    project: "office ui",
    task: "dashboard screen",
    remarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
  },
];

const Indextable = () => {
  const [tableData, settableData] = useState(inititalState);
  const [tableData1, settableData1] = useState(inititalState1);
  const [tableData2, settableData2] = useState(inititalState2);
  const [tableData3, settableData3] = useState(inititalState3);
  const [updateData, setUpdateData] = useState();
  const [DeleteData, setDeleteData] = useState();
  const state = useContext(GlobalState);
  const token = state.token;
  const AddHandling = async () => {
    await axios.post("api", {
      headers: { Authorization: token },
    });
  };

  const updatingHandling = async () => {
    await axios.put("api", {
      headers: { Authorization: token },
    });
  };

  const deleteHandling = async () => {
    await axios.post("api", {
      headers: { Authorization: token },
    });
  };

  return (
    <div className="table1">
      <div className="table ">
        <MaterialTable
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                settableData([...tableData, newRow]);
                setTimeout(() => resolve(), 200);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData[oldRow.tableData.id] = newRow;
                settableData([...tableData, newRow]);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
            onRowDelete: (selectedrow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData.splice(selectedrow.tableData.id, 1);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
          }}
          // onSearchChange={(selectedRows)=>console.log(selectedRows)}
          options={{
            headerStyle: {
              backgroundColor: "#DEF3FA",
              color: "Black",
            },
            searchFieldAlignment: "left",
            paging: true,
            pageSizeOptions: [3, 10, 20, 25, 50, 100],
            pageSize: "3",
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showTextRowsSelected: false,
            rowStyle: { background: "#f5f5f5" },
          }}
          columns={columns}
          data={tableData}
          title="My task list"
        />
      </div>

      <div className="table 	">
        <MaterialTable
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                settableData([...tableData, newRow]);
                setTimeout(() => resolve(), 200);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData[oldRow.tableData.id] = newRow;
                settableData([...tableData, newRow]);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
            onRowDelete: (selectedrow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData.splice(selectedrow.tableData.id, 1);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
          }}
          // onSearchChange={(selectedRows)=>console.log(selectedRows)}
          options={{
            headerStyle: {
              backgroundColor: "#DEF3FA",
              color: "Black",
            },
            searchFieldAlignment: "left",
            paging: true,
            pageSizeOptions: [3, 10, 20, 25, 50, 100],
            pageSize: "3",
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showTextRowsSelected: false,
            rowStyle: { background: "#f5f5f5" },
          }}
          columns={columns1}
          data={tableData1}
          title="My task list"
        />
      </div>

      <div className="table  	">
        <MaterialTable
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                settableData([...tableData, newRow]);
                setTimeout(() => resolve(), 200);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData[oldRow.tableData.id] = newRow;
                settableData([...tableData, newRow]);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
            onRowDelete: (selectedrow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData.splice(selectedrow.tableData.id, 1);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
          }}
          // onSearchChange={(selectedRows)=>console.log(selectedRows)}
          options={{
            headerStyle: {
              backgroundColor: "#DEF3FA",
              color: "Black",
            },
            searchFieldAlignment: "left",
            paging: true,
            pageSizeOptions: [3, 10, 20, 25, 50, 100],
            pageSize: "3",
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showTextRowsSelected: false,
            rowStyle: { background: "#f5f5f5" },
          }}
          columns={columns2}
          data={tableData2}
          title="My task list"
        />
      </div>

      <div className="table">
        <MaterialTable
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                settableData([...tableData, newRow]);
                setTimeout(() => resolve(), 200);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData[oldRow.tableData.id] = newRow;
                settableData([...tableData, newRow]);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
            onRowDelete: (selectedrow) =>
              new Promise((resolve, reject) => {
                const updatingData = [...tableData];
                updatingData.splice(selectedrow.tableData.id, 1);
                settableData(updatingData);
                setTimeout(() => resolve(), 200);
              }),
          }}
          // onSearchChange={(selectedRows)=>console.log(selectedRows)}
          options={{
            headerStyle: {
              backgroundColor: "#DEF3FA",
              color: "Black",
              width: "5%",
            },
            searchFieldAlignment: "left",
            paging: true,
            pageSizeOptions: [3, 10, 20, 25, 50, 100],
            pageSize: "3",
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showTextRowsSelected: false,
            rowStyle: { background: "#f5f5f5" },
          }}
          columns={columns3}
          data={tableData3}
          title="My task list"
        />
      </div>
    </div>
  );
};

export default Indextable;
