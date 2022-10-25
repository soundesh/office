import React, { useState } from "react";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./HrPayroll.css";

const initialState = [
  {
    id: "2333332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    joinDate: "2/03/2018",
    userImg:
      "https://www.usnews.com/object/image/00000163-652c-d812-a367-eded8f0e0000/180515-10thingselonmusk-editorial.jpg?update-time=1526411160555&size=responsive970",
    email: "parimala@gmail.com",
    role: "super admin",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "1",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    mobile: "123456789",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2333332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss2gmail.com",
    role: "super admin",
    department: "web development",
    Job: "senior developer",
    skill: "java angular ,c program ,",
    experiance: "1",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "done",
    project: [],
    projectTeam: [],
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2",
    empId: "RIM-567",
    username: "shyam",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "shyamkumardp@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "1",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "done",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "233",
    empId: "RIM-567",
    username: "sandeep",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "sandeep@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "1",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",

    project: [],
    projectTeam: [],
    role: "hradmin",

    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "ragu",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "1",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "yes",
    project: [],
    projectTeam: [],
    role: "team lead",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "done",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "done",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "done",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "pending",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
  {
    id: "2332",
    empId: "RIM-567",
    username: "soundesh",
    fristName: "dummy Name",
    LastName: "last Name",
    userImg:
      "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg?w=400&h=300&c=crop",
    email: "soundeshss@gmail.com",
    department: "web development",
    Job: "Full stack developer",
    skill: "java angular ,c program ,",
    experiance: "",
    workedarea: "front end",
    salary: "15000",
    salarystatus: "done",
    project: [],
    projectTeam: [],
    role: "employee",
    mobile: "123456789",
    joinDate: "2/03/2018",
    password: "",
    confirmpassword: "",
  },
];

const HrPayrolltable = () => {
  const [Show, setShow] = useState();

  const [setpayrollRegShow] = useState(false);
  const [setEdit] = useState(false);

  const [setEditData] = useState();
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const result = allData.filter((item) => {
      const data = () => {
        for (const user in item) {
          if (item[user].includes(value)) {
            return item;
          }
        }
      };
      return data();
    });
    setFilteredData(result);
    return;
  };
  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== Object.values(deleteItem)[0];
      });
      setAllData(data);
      setFilteredData(data);
      console.log("You pressed OK!");
    }
  };

  const OnhandleEdit = (item) => {
    setEdit(true);
    setEditData(item);
    setpayrollRegShow(true);
  };

  return (
    <div className=" space-y-8 ">
      <Paper>
        <div className="flex flex-row items-center justify-between mx-2 ">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
              Payroll table
            </h1>
            <label htmlFor="search"></label>
            <Tooltip title="search">
              <input
                id="search"
                type="text"
                placeholder="search"
                size="12"
                className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                onChange={(event) => handleSearch(event)}
              />
            </Tooltip>
          </div>

          <div className="mr-3.5 flex flex-row items-center space-x-4 ">
            <div>
              <Tooltip title="show">
                <button
                  className="  flex  p-1 rounded-lg shadow hover:shadow-lg outline-hidden border-none  items-center"
                  onClick={() => {
                    setShow(!Show);
                  }}
                >
                  <p>show</p>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </Paper>
      <div
        className={
          Show
            ? "mt-2  overflow-auto Payrolllist p-2"
            : " h-[65vh] Payrolllist mt-1 overflow-auto p-2"
        }
      >
        <table className="HrPayrolltable ">
          <thead className="bg-red-300 ">
            <tr>
              <th>Name</th>

              <th>Role</th>

              <th>department</th>

              <th>Salary</th>
              <th>salary status</th>

              {/* <th>edit</th> */}
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {filteredData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex flex-row space-x-4 items-center max-h-[50px]">
                      <div className="w-[34px] h-[34px] bg-red-300 flex flex-row items-center justify-center rounded-full">
                        <img
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                          src={item.userImg}
                          alt={item.username}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl">{item.username}</h3>
                        <h3 className="text-gray-400">{item.email}</h3>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="bg-red-400 text-white px-1 min-w-[100px] rounded-lg">
                      <h3 className="text-xl">{item.role}</h3>
                    </div>
                  </td>
                  <td>
                    <div>{item.department}</div>
                  </td>
                  <td>{item.salary}</td>
                  <td>{item.salarystatus}</td>
                  {/* <td>
                    <div>
                      <Tooltip title="edit" onClick={() => OnhandleEdit(item)}>
                        <IconButton form="my_form1" type="submit">
                          <CreateIcon className="text-red-400" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td> */}
                  <td>
                    <div>
                      <Tooltip title="edit" onClick={() => OnhandleEdit(item)}>
                        <IconButton form="my_form1" type="submit">
                          <CreateIcon className="text-red-400" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Tooltip
                        title="Delete"
                        className="border-0"
                        onClick={() => onhandleDelete(item)}
                      >
                        <IconButton>
                          <DeleteOutlineIcon className="text-red-400" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrPayrolltable;
