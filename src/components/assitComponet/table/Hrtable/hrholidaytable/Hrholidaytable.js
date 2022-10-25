import React, { useState } from "react";
import { Paper } from "@mui/material";
import CreateLeaveholidays from "./CreateLeaveholidays";
import "./Hrholidays.css";
const initialState = [
  {
    id: "126",
    leavedate: "23/05/22",
    leavetype: "festival",
    holiday: "deepavali",
  },
  {
    id: "121",
    leavedate: "2/03/22",
    leavetype: "festival",

    holiday: "sri krishnar jemaasvvvvtami ",
  },
  {
    id: "123",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "124",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "125",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "30/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  { id: "129", leavedate: "2/03/22", leavetype: "RH", holiday: "mattu pongal" },

  {
    id: "127",
    leavedate: "2/01/22",
    leavetype: " general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "122",
    leavedate: "23/01/22",
    leavetype: "national",
    holiday: "srikrishnar jemaavvvvstami",
  },
  {
    id: "121",
    leavedate: "12/05/22",
    leavetype: "national",
    holiday: "independance",
  },
];

const Hrholidaytable = () => {
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const [userRegShow, setuserRegShow] = useState(false);
  const [editData, setEditData] = useState();

  const [edit, setEdit] = useState(false);

  const OnhandleEdit = (item) => {
    setEdit(true);
    setEditData(item);
    setuserRegShow(true);
  };

  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== Object.values(deleteItem)[0];
      });
      setAllData(data);
      setFilteredData(data);
      setuserRegShow(!userRegShow);
      console.log("You pressed OK!");
    }
  };

  //   const sortedate = allData.sort(function compare(a, b) {
  //     var dateA = new Date(
  //       `${a.leavedate.split("/")[1]}/${a.leavedate.split("/")[0]}/${
  //         a.leavedate.split("/")[2]
  //       } `
  //     );
  //     var dateB = new Date(
  //       `${b.leavedate.split("/")[1]}/${b.leavedate.split("/")[0]}/${
  //         b.leavedate.split("/")[2]
  //       } `
  //     );
  //     return dateA - dateB;
  //   });

  return (
    <div className="databg pt-2">
      {userRegShow ? (
        <CreateLeaveholidays
          settrigger={setuserRegShow}
          trigger={userRegShow}
          editor={edit}
          editData={editData}
          onhandleDelete={onhandleDelete}
        />
      ) : null}
      <Paper>
        <h1
          className="text-xl ml-2 p-2 bg-indigo-300 max-w-[150px] rounded-lg addEmpForm "
          onClick={() => {
            setuserRegShow(true);
            setEdit(false);
          }}
        >
          add Holiday
        </h1>
        <div className="p-4 flex flex-column items-center justify-center">
          <h1 className="text-3xl">Holidays Leave </h1>
          <table className="Hrholidaytable min-w-[500px] gfg  border-2 p-4">
            <thead>
              <tr className="bg-white font-serif leading-5 min-w-[150px] font-medium italic hover:not-italic">
                <th>leave Date</th>
                <th>leave type </th>
                <th>List Holidays</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      OnhandleEdit(item);
                    }}
                    className="font-serif leading-5 min-w-[150px] font-medium italic hover:not-italic"
                  >
                    <td className="geeks">{item.leavedate}</td>
                    <td className="geeks">{item.leavetype}</td>
                    <td className="geeks">{item.holiday}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Paper>
    </div>
  );
};

export default Hrholidaytable;
