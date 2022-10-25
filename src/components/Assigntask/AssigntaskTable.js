import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import CreateAssigntask from "./CreateAssigntask";
import SingleDetail from "../assitComponet/SingleDetail";

import Tableheader from "../assitComponet/Tableheader";

import SelectorFrom from "../assitComponet/SelectorFrom";

const AssigntaskTable = ({
  initialState,
  headerState,
  title,
  CheckDeletecolor,
}) => {
  const [show, setShow] = useState(false);
  const [shownontable, setShownontable] = useState(false);
  const [AssigntaskShow, setAssigntaskShow] = useState(false);
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const [ApprovedData, setApprovedData] = useState([initialState[0]]);
  const [updateTask, setUpdateTask] = useState([initialState[0]]);
  const [updateTaskData, setUpdateTaskData] = useState(initialState[0]);
  const [nonApprovedData, setNonApprovedData] = useState([initialState[0]]);
  const [edit, setEdit] = useState(true);
  const [added, setAdd] = useState([]);
  const [viewDetail, setViewDetail] = useState();
  const [ApplyLeave, setApplyLeave] = useState({
    date: " ",
    to: " ",
    from: " ",
    leaveType: " ",
    reason: "",
    Days: " ",
    reasonleave: "",
  });
  const [viewData, setViewData] = useState(initialState[0]);
  const [addInput] = useState(() => {
    const data = Object.keys(initialState[0]);
    var newObj = {};
    for (var i = 0; i < data.length; i++) {
      newObj[data[i]] = "";
    }
    return newObj;
  });
  useEffect(() => {
    const nonApproved = filteredData.filter((item) => {
      return item.status !== "yes";
    });
    const Approved = filteredData.filter((item) => {
      return item.status === "yes";
    });
    setNonApprovedData(nonApproved);
    setApprovedData(Approved);
  }, [filteredData]);

  // start handle funstions
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
  //delete item in table
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
  const onhandleadd = () => {
    setAdd(true);
    setViewDetail(false);
  };

  const onRowshow = (e, item) => {
    e.preventDefault();
    setViewDetail(true);
    setAdd(false);
    setViewData(item);
  };

  const onRowshowclose = (e, item) => {
    e.preventDefault();
    setViewDetail(false);
    setAdd(true);
    setEdit(true);
  };

  const OnhandleEdit = (item) => {
    setEdit(!edit);
    setUpdateTask([item]);
    setUpdateTaskData(item);
  };

  const addSubmit = (e) => {
    e.preventDefault();
    console.log("add input ", addInput);
    setAdd(!added);
  };

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({ ...updateTaskData, [name]: value });
  };

  const ontaskUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("emp task update ", updateTaskData);
  };

  const editSubmit = (e) => {
    e.preventDefault();
  };

  function today() {
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth() + 1;
    let currYear = d.getFullYear();
    return (
      (currDate < 10 ? "0" + currDate : currDate) +
      "/" +
      (currMonth < 10 ? "0" + currMonth : currMonth) +
      "/" +
      currYear
    );
  }

  const onChangeapplyLeave = (e) => {
    const { name, value } = e.target;
    setApplyLeave({
      ...ApplyLeave,
      [name]: value,
      date: today(),
    });
  };

  const yearData = () => {
    let year = [
      2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
      2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040,
      2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
    ];
    const yearData = year.filter((item) => {
      let d = new Date();
      let currYear = d.getFullYear();
      return item <= currYear;
    });
    return yearData.reverse();
  };

  const project = ["Office ui", "office data", "3d cad website"];

  const onchangefilter = (e) => {};

  const infoDataTask = Object.keys(headerState[0]);

  return (
    <div>
      <div className="flex flex-row itmes-center space-x-1 ">
        <Paper
          elevation={3}
          className="overflow-auto py-1 max-w-[450px] flex flex-row items-center  p-1 space-x-1 justify-center"
        >
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-teal-300 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Year"
              OptionData={yearData()}
              sizewidth="15"
              Date="18 oct 2021"
              onChange={onchangefilter}
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-rose-300 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Week"
              OptionData={yearData()}
              sizewidth="12"
              Date="45"
              onChange={onchangefilter}
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-yellow-400 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Month"
              OptionData={yearData()}
              sizewidth="15"
              Date="december"
              onChange={onchangefilter}
            />
          </div>
        </Paper>

        <Paper
          elevation={3}
          className="overflow-auto py-1 flex flex-row items-center  p-1  space-x-1 justify-center"
        >
          <div className="space-x-1  hover:bg-red-300  addEmpForm flex flex-row rounded-lg bg-blue-200 justify-center  pt-1 p-2">
            <Paper>
              <label htmlFor="to" className="mr-1">
                From :
              </label>

              <input
                type="date"
                name="from"
                className="outline-none"
                onChange={(e) => {
                  onChangeapplyLeave(e);
                }}
              />
            </Paper>
          </div>
          <div className="space-x-1  hover:bg-red-300 flex  addEmpForm flex-row rounded-lg bg-blue-200 justify-center pt-1 p-2">
            <Paper>
              <label htmlFor="to" className="mr-1">
                Last :
              </label>
              <input
                type="date"
                name="to"
                className="outline-none"
                onChange={(e) => {
                  onChangeapplyLeave(e);
                }}
              />
            </Paper>
          </div>
        </Paper>

        <Paper
          elevation={3}
          className="flex flex-row p-1 space-x-1    min-w-[385px]  justify-center"
        >
          <div className=" flex flex-row min-w-[170px]  addEmpForm  space-x-1  items-center hover:bg-red-300 rounded-lg bg-teal-300 justify-center  px-2">
            <SelectorFrom
              labeled="Project"
              OptionData={project}
              sizewidth="14"
              Date="18 oct 2021"
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-rose-300 justify-center px-2 ">
            <SelectorFrom
              labeled="Task Assigned"
              OptionData={project}
              sizewidth="12"
              Date="45"
            />
          </div>
        </Paper>
      </div>

      <Paper
        elevation={3}
        className="overflow-auto my-1 py-1 w-full flex flex-row min-h-[23vh] items-center justify-center  space-x-4"
      >
        {/*view detail information table */}
        {viewDetail ? (
          <div className="min-h-[24vh] bg-indigo-300 pt-2 min-w-[100%] flex flex-column  items-center">
            <div className="flex flex-row ">
              {Object.keys(viewData).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index <= 4) {
                  return (
                    <div key={index} className="flex flex-row">
                      <SingleDetail
                        title={infoDataTask[index]}
                        singleData={viewData[item]}
                      />
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>

            <div className="flex flex-row ">
              {Object.keys(viewData).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index >= 5 && index <= 7) {
                  return (
                    <div key={index} className="flex flex-row">
                      <SingleDetail
                        title={infoDataTask[index]}
                        singleData={viewData[item]}
                      />
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>
            <div className="flex flex-row ">
              {Object.keys(viewData).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index > 7) {
                  return (
                    <div key={index} className="flex flex-row">
                      <SingleDetail
                        title={infoDataTask[index]}
                        singleData={viewData[item]}
                      />
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>
          </div>
        ) : (
          " "
        )}

        {/*         
  {
    id: "1233",
    taskdate: "06/10/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  }, */}

        {/* upadate today task managed */}
        {added ? (
          <div className="bg-green-300">
            <div className="flex flex-row ">
              {Object.keys(...updateTask).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index <= 4) {
                  return (
                    <div key={index} className="flex flex-row">
                      <SingleDetail
                        title={infoDataTask[index]}
                        singleData={Object.values(...updateTask)[index]}
                      />
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>
            <div className="flex flex-row ">
              {Object.keys(...updateTask).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index >= 5 && index <= 7) {
                  return (
                    <div key={index} className="flex flex-row">
                      <SingleDetail
                        title={infoDataTask[index]}
                        singleData={Object.values(...updateTask)[index]}
                      />
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>
            <div className="flex flex-row ">
              {Object.keys(...updateTask).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index > 7) {
                  return (
                    <div key={index} className="flex flex-row">
                      <SingleDetail
                        title={infoDataTask[index]}
                        singleData={Object.values(...updateTask)[index]}
                      />
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>

            <div>
              {updateTask.map((item, index) => {
                return (
                  <div key={index} className=" min-w-[100%]">
                    <Paper elevation={5}>
                      <div className="bg-green-300 pt-2 min-w-[100%] flex flex-column  items-center">
                        {/* form*/}
                        <form
                          method="GET"
                          id="my_form2"
                          onSubmit={ontaskUpdateSubmit}
                        >
                          <div className="flex flex-row">
                            <div className="flex flex-row">
                              <div className=" min-h-[8vh]   flex flex-row ">
                                <Paper
                                  elevation={8}
                                  className="flex justify-center p-1 m-1"
                                >
                                  <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                                    <div className="max-w-[100px] mr-3">
                                      <label htmlFor="empremarks">
                                        approver remarks
                                      </label>
                                    </div>
                                    <textarea
                                      id="empremarks"
                                      name="empremarks"
                                      type="text"
                                      rows="2"
                                      cols="30"
                                      form="my_form2"
                                      placeholder="employee remarks about project task"
                                      onChange={(e) => {
                                        onChangeUpdate(e);
                                      }}
                                      className="resize-none border-purple-800 rounded-md border-2 -ml-10"
                                      maxLength="70"
                                    ></textarea>
                                  </div>
                                </Paper>

                                <Paper
                                  elevation={8}
                                  className="flex justify-center p-1 m-1"
                                >
                                  <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                                    <button
                                      type="submit"
                                      form="my_form2"
                                      className="py-3 px-1 bg-indigo-300 text-white hover:bg-red-300 rounded-lg"
                                    >
                                      Approve
                                    </button>
                                  </div>
                                </Paper>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Paper>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </Paper>

      {/* add idle work form */}
      {AssigntaskShow ? (
        <CreateAssigntask
          initialState={[initialState[0]]}
          trigger={AssigntaskShow}
          settrigger={setAssigntaskShow}
          today={today()}
        />
      ) : null}

      {/* table non aproved task  */}
      <Paper>
        <form method="GET" id="my_form" onSubmit={addSubmit}></form>
        <form method="GET" id="my_form1" onSubmit={editSubmit}></form>
        {/* title header add and show here*/}

        <Paper elevation={2} className="mb-3 mx-0.5 ">
          {edit
            ? null
            : updateTask.map((item, index) => {
                return (
                  <div key={index}>
                    <Paper elevation={5}>
                      <div className="bg-indigo-300 pt-2 min-w-[1200px] flex flex-column  items-center">
                        {/* form*/}
                        <form
                          method="GET"
                          id="my_form2"
                          onSubmit={ontaskUpdateSubmit}
                        >
                          <div className="flex flex-row">
                            <div className="flex flex-row">
                              <div className=" flex flex-row ">
                                <Paper
                                  elevation={8}
                                  className="flex justify-center p-1 m-1"
                                >
                                  <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                                    <div className="max-w-[100px] mr-3">
                                      <label htmlFor="empremarks">
                                        approver remarks
                                      </label>
                                    </div>
                                    <textarea
                                      id="empremarks"
                                      name="empremarks"
                                      type="text"
                                      rows="2"
                                      cols="30"
                                      form="my_form2"
                                      placeholder="employee remarks about project task"
                                      onChange={(e) => {
                                        onChangeUpdate(e);
                                      }}
                                      className="resize-none border-purple-800 rounded-md border-2 -ml-10"
                                      maxLength="70"
                                    ></textarea>
                                  </div>
                                </Paper>

                                <Paper
                                  elevation={8}
                                  className="flex justify-center p-1 m-1"
                                >
                                  <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                                    <button
                                      type="submit"
                                      form="my_form2"
                                      className="py-3 px-1 bg-indigo-300 text-white hover:bg-red-300 rounded-lg"
                                    >
                                      Approve
                                    </button>
                                  </div>
                                </Paper>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Paper>
                  </div>
                );
              })}
          <div className="flex flex-row items-center justify-between mx-2 -mb-2">
            <div className="flex flex-row items-center space-x-4">
              <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
                {title}
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
              <div className="flex items-center shadow hover:shadow-lg outline-hidden border-none rounded-lg">
                <Tooltip
                  title="create"
                  onClick={() => {
                    setAssigntaskShow(!AssigntaskShow);
                  }}
                >
                  <IconButton>
                    <AddCircleOutlineIcon className="text-indigo-400 " />
                  </IconButton>
                </Tooltip>
                <button
                  onClick={() => {
                    setAssigntaskShow(!AssigntaskShow);
                  }}
                  className="  flex  p-1 rounded-lg   items-center"
                >
                  Create task
                </button>
              </div>
              <div>
                <Tooltip title="show">
                  <button
                    className="  flex  p-1 rounded-lg shadow hover:shadow-lg outline-hidden border-none  items-center"
                    onClick={() => {
                      setShow(!show);
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
            show
              ? "mt-2 overflow-auto    p-2"
              : " h-[27vh] mt-2  overflow-auto p-2"
          }
        >
          <table className="EmpLeaveTable min-w-[2000px] ">
            <thead className=" py-2">
              <tr>
                <th className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic">
                  <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                    Edit
                  </p>
                </th>
                <th className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic">
                  <p className="border-2 rounded-lg py-2 grid justify-items-center ">
                    cancel
                  </p>
                </th>
                <Tableheader
                  initialState={headerState[0]}
                  theadColor="bg-indigo-400"
                />
              </tr>
            </thead>

            <tbody>
              {nonApprovedData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={(e) => {
                      onRowshow(e, item);
                    }}
                    onDoubleClick={(e) => {
                      onRowshowclose(e, item);
                    }}
                  >
                    <td>
                      <div className="border-2   rounded-lg  ">
                        <Tooltip
                          title="edit"
                          onClick={() => OnhandleEdit(item)}
                        >
                          <IconButton form="my_form1" type="submit">
                            <CreateIcon sx={{ color: `${CheckDeletecolor}` }} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                    <td>
                      <div className="border-2   rounded-lg  ">
                        <Tooltip
                          title="Delete"
                          className="border-0"
                          onClick={() => onhandleDelete(item)}
                        >
                          <IconButton>
                            <DeleteOutlineIcon
                              sx={{ color: `${CheckDeletecolor}` }}
                            />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                    {Object.keys(item).map((data, index) => {
                      if (Object.keys(item)[0] === Object.keys(item)[index]) {
                        return <td key={Object.values(item)}></td>;
                      }
                      return (
                        <Tooltip
                          key={index}
                          title={`${Object.keys(item)[index]}`}
                        >
                          <td>
                            <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                              {item[data]}
                            </p>
                          </td>
                        </Tooltip>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Paper>

      {/* table non aproved task  */}
      <Paper>
        <div
          className={
            shownontable
              ? "mt-2  overflow-auto p-2"
              : " h-[26vh] mt-1 overflow-auto p-2"
          }
        >
          <div className="flex flex-row items-center justify-between mx-2 -mb-2">
            <div className="flex flex-row items-center space-x-4">
              <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
                approved
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
                <Tooltip title="create" onClick={onhandleadd}>
                  <IconButton>
                    <AddCircleOutlineIcon className="text-indigo-400 " />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="show">
                  <button
                    className="  flex  p-1 rounded-lg shadow hover:shadow-lg outline-hidden border-none  items-center"
                    onClick={() => {
                      setShownontable(!shownontable);
                    }}
                  >
                    <p>show</p>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div>
            <table className="EmpLeaveTable min-w-[1800px]  ">
              <thead>
                <tr>
                  <Tableheader
                    initialState={headerState[0]}
                    theadColor="bg-indigo-400"
                  />
                </tr>
              </thead>

              <tbody className="overflow-auto">
                {ApprovedData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={(e) => {
                        onRowshow(e, item);
                      }}
                      onDoubleClick={(e) => {
                        onRowshowclose(e, item);
                      }}
                    >
                      {Object.keys(item).map((data, index) => {
                        if (Object.keys(item)[0] === Object.keys(item)[index]) {
                          return <td key={Object.values(item)}></td>;
                        }
                        return (
                          <Tooltip
                            key={index}
                            title={`${Object.keys(item)[index]}`}
                          >
                            <td>
                              <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                                {item[data]}
                              </p>
                            </td>
                          </Tooltip>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AssigntaskTable;
