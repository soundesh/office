import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Input from "./input/FromInupt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import DoneIcon from "@mui/icons-material/Done";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

import CheckBoxdesign from "./Checkbox/CheckBoxdesign";

const TableComponent = ({
  initialState,
  headerState,
  title,
  CheckDeletecolor,
}) => {
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const [allCheck, setAllCheck] = useState();
  const [edit, setEdit] = useState(true);
  const [added, setAdd] = useState([]);
  const [selectedNotEmpty, setSelectedNotEmpty] = useState();
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [editData, setEditData] = useState([initialState[0]]);
  const [addInput, setAddInput] = useState(() => {
    const data = Object.keys(initialState[0]);
    var newObj = {};
    for (var i = 0; i < data.length; i++) {
      newObj[data[i]] = "";
    }
    return newObj;
  });

  const [editInput, setEditinput] = useState(() => {
    const data = Object.keys(initialState[0]);
    var newObj = {};
    for (var i = 0; i < data.length; i++) {
      newObj[data[i]] = "";
    }
    return newObj;
  });

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

  const onallcheckhandleDelete = () => {
    // const checkedData = allData.filter((element) =>
    //   filteredData.includes(element)
    // );
    if (window.confirm("please conform to delete")) {
      const balancedata = allData.filter(
        (element) => !filteredData.includes(element)
      );
      setAllData(balancedata);
      setFilteredData(balancedata);
      setAllCheck(!allCheck);
      console.log("You pressed OK!");
    }
  };

  const onSelectedcheckdelete = () => {
    //console.log(selectedCheckbox);
    const intersection = allData.filter(
      (element) => !selectedCheckbox.includes(element)
    );
    setFilteredData(intersection);
    setSelectedNotEmpty(false);
  };
  const onhandleadd = () => {
    setAdd(!added);
  };

  const OnhandleEdit = (item) => {
    setEditData([item]);
    setEditinput(item);
    setEdit(!edit);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setAddInput({ ...addInput, [name]: value });
  };
  const onChangeedit = (e) => {
    const { name, value } = e.target;
    setEditinput({ ...editInput, [name]: value });
  };

  const addSubmit = (e) => {
    e.preventDefault();
    console.log(addInput);
    setAdd(!added);
  };
  const UpdateSubmit = (e) => {
    e.preventDefault();
    console.log(editInput);
  };

  const onSelectedAllCheck = (e) => {
    if (e.target.checked) {
      setAllCheck(!allCheck);
    } else {
      setAllCheck(false);
    }
  };

  const onselectcheck = (e) => {
    if (e.target.checked) {
      const { value } = e.target;
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

      setSelectedCheckbox([...selectedCheckbox, ...result]);
    } else {
      const { value } = e.target;
      setSelectedCheckbox(
        selectedCheckbox.filter((item) => Object.values(item)[0] !== value)
      );
    }
  };

  useEffect(() => {
    if (selectedCheckbox.length !== 0) {
      setSelectedNotEmpty(true);
    } else {
      setSelectedNotEmpty(false);
    }
  }, [selectedCheckbox]);
  return (
    <Paper>
      <form method="GET" id="my_form" onSubmit={addSubmit}></form>

      <form method="GET" id="my_form1" onSubmit={UpdateSubmit}></form>
      <Paper elevation={2} className="mb-3 mx-0.5 ">
        <div className="flex flex-row items-center justify-between mx-2 -mb-2">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
              {title}
            </h1>

            <label htmlFor="search">
              <Tooltip title="search">
                <input
                  id="search"
                  type="text"
                  placeholder="search"
                  size="12"
                  onChange={(event) => handleSearch(event)}
                />
              </Tooltip>
            </label>
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

      {allCheck ? (
        <div className="flex flex-row items-center">
          <h4>Delete all</h4>
          <Tooltip
            title="Delete"
            className="border-0"
            onClick={() => onallcheckhandleDelete()}
          >
            <IconButton>
              <DeleteOutlineIcon sx={{ color: `${CheckDeletecolor}` }} />
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        " "
      )}
      {selectedNotEmpty ? (
        <div className="flex flex-row items-center">
          <h4>selected Delete</h4>
          <Tooltip
            title="Delete"
            className="border-0"
            onClick={() => onSelectedcheckdelete()}
          >
            <IconButton>
              <DeleteOutlineIcon sx={{ color: `${CheckDeletecolor}` }} />
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        " "
      )}
      <div
        className={
          show ? "mb-1   overflow-auto p-2" : "mb-1 h-48 overflow-auto p-2"
        }
      >
        <table className="HRtable">
          <thead className=" py-2">
            <tr>
              {Object.keys(initialState[0]).map((item, index) => {
                if (Object.keys(item)[0] === Object.keys(item)[index]) {
                  return (
                    <th key={Object.values(item)}>
                      <div className="">
                        <CheckBoxdesign
                          beforeClicked={`${CheckDeletecolor}`}
                          ValueData={(e) => {
                            onSelectedAllCheck(e, item);
                          }}
                        />
                      </div>
                    </th>
                  );
                }
                return (
                  <th
                    className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic"
                    key={index}
                  >
                    <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                      {item}
                    </p>
                  </th>
                );
              })}
              <th className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic">
                <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                  Action
                </p>
              </th>
            </tr>
          </thead>

          <tbody>
            {added ? null : (
              <>
                <tr>
                  {Object.keys(addInput).map((item, index) => {
                    if (
                      Object.keys(addInput)[0] === Object.keys(addInput)[index]
                    ) {
                      return (
                        <React.Fragment key={addInput[item]}></React.Fragment>
                      );
                    }

                    return (
                      <td key={index}>
                        <Input
                          Name={item}
                          formed="my_form"
                          tableData={addInput[item]}
                          ValueData={onChangeInput}
                        />
                      </td>
                    );
                  })}
                  <td>
                    <Tooltip title="save">
                      <IconButton form="my_form" type="submit">
                        <DoneIcon sx={{ color: "#008B8B" }} />
                      </IconButton>
                    </Tooltip>
                  </td>
                  <td>
                    <Tooltip title="cancel" onClick={onhandleadd}>
                      <IconButton>
                        <CloseIcon sx={{ color: `${CheckDeletecolor}` }} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              </>
            )}
            {edit
              ? filteredData.map((item, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(item).map((data, index) => {
                        if (Object.keys(item)[0] === Object.keys(item)[index]) {
                          return (
                            <td key={Object.values(item)}>
                              <div>
                                <CheckBoxdesign
                                  IDvaluecheck={Object.values(item)[0]}
                                  beforeClicked={`${CheckDeletecolor}`}
                                  ValueData={(e) => {
                                    onselectcheck(e);
                                  }}
                                />
                              </div>
                            </td>
                          );
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
                      <td className="flex flex-row">
                        <div className="border-2 flex   rounded-lg flex justify-center   ">
                          <Tooltip
                            title="edit"
                            onClick={() => OnhandleEdit(item)}
                          >
                            <IconButton form="my_form1" type="submit">
                              <CreateIcon
                                sx={{ color: `${CheckDeletecolor}` }}
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                        <div className="border-2 flex   -mr-8 rounded-lg  flex justify-center  ">
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
                    </tr>
                  );
                })
              : editData.map((item, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(editInput).map((item, index) => {
                        if (
                          Object.keys(editInput)[0] ===
                          Object.keys(editInput)[index]
                        ) {
                          return <td key={editInput[item]}></td>;
                        }

                        return (
                          <td key={index}>
                            <Input
                              Name={item}
                              formed="my_form1"
                              tableData={editInput[item]}
                              ValueData={onChangeedit}
                            />
                          </td>
                        );
                      })}
                      <td>
                        <Tooltip title="save">
                          <IconButton form="my_form1" type="submit">
                            <DoneIcon sx={{ color: "#008B8B" }} />
                          </IconButton>
                        </Tooltip>
                      </td>
                      <td>
                        <Tooltip
                          title="cancel"
                          onClick={() => OnhandleEdit(item)}
                        >
                          <IconButton>
                            <CloseIcon sx={{ color: `${CheckDeletecolor}` }} />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </Paper>
  );
};

export default TableComponent;
