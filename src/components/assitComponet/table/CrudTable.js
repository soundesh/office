import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import CreateIcon from "@mui/icons-material/Create";
import CheckBoxdesign from "./Checkbox/CheckBoxdesign";
import Paper from "@mui/material/Paper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import "./CrudTable.css";

const CrudTable = ({
  initialData,
  headerData,
  title,
  Design,
  tableDesign,
  tableheight,
  Addingcomponent,
  Adding,
  editing,
  viewing,
  CheckDeletecolor,
  ViewEdit
}) => {
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(allData);
  //adding
  const [addState, setAddState] = useState(Adding);
  const [add, setAdd] = useState(false);
  const [AddingItem, setAddingItem] = useState();
  const [AddingShow, setAddingshow] = useState(false);
  // edit
  const [editState, setEditState] = useState(editing);
  const [edit, setEdit] = useState(true);
  const [editItem, setEditItem] = useState();
  const [EditData, setEditData] = useState([initialData[0]]);


  //view 

  
  const [viewState, setViewState] = useState(viewing);
  const [View, setView] = useState(true);
  const [ViewItem, setViewItem] = useState();
  const [ViewData, setViewData] = useState([initialData[0]]);

  //delete
  const [Delete, setDelete] = useState();
  // start handle search  funstions
  const [allCheck, setAllCheck] = useState();
  const [selectedNotEmpty, setSelectedNotEmpty] = useState();
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
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

  const OnhandleEdit = (item) => {
    setEdit(false);
    setEditData([item])
    setView(true)
    setViewData([item])
  };

  
  const OnhandleView = (item) => {
    setEdit(true);
    setView(true)
    setViewData([item])
  };


const OnhandleViewhidden =()=>{
  setView(false)
  setEdit(false);
}

useEffect(()=>{

},[ OnhandleEdit, OnhandleView])
  // const onChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setAddInput({ ...addInput, [name]: value });
  // };
  // const onChangeedit = (e) => {
  //   const { name, value } = e.target;
  //   setEditinput({ ...editInput, [name]: value });
  // };

  // const addSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(addInput);
  //   setAdd(!added);
  // };
  // const UpdateSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(editInput);
  // };

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

  //   <div>
  //   <CommonTable
  //     initialData={Dummydata}
  //     headerData={empTaskheader}
  //     title="Task Status"
  //     Design="with"
  //   />
  // </div>
  return (
    <div
      className={` ${Design} space-x-2  border-2 border-gray-400  mr-2 p-2 rounded-lg overflow-auto`}
    >
      <h1 className="headerfont bg-indigo-700 text-white mt-2 py-2 pl-2  ">
        {title}
      </h1>
      {addState ? (
        add ? (
          <div>
            {
              <Addingcomponent
                initialState={[filteredData[0]]}
                trigger={add}
                settrigger={setAdd}
              />
            }
          </div>
        ) : null
      ) : null}  

      
      {/*
<ViewEdit infoDataTask={  headerData} viewData={EditData} initialState={EditData}  />*/}
      {/* {viewState ? (editState ? edit ? <div>
<ViewEdit infoDataTask={headerData} viewDataedit={EditData}  edittrigger={edit} /> 
</div>
 : null:null):null} */}
      <Paper elevation={2} className="mb-3 mx-0.5 lg:min-h-[30px]">
        <div className="flex lg:flex-row flex-wrap items-center justify-between mx-2 -mb-2 lg:text-lg p-2">
          <div className="flex flex-row items-center space-x-4">
            <label htmlFor="search">
              <Tooltip title="search">
                <input
                  id="search"
                  type="text"
                  placeholder="search"
                  size="12"
                  onChange={(event) => handleSearch(event)}
                  className="resize-none border-amber-800 rounded-md border-2 max-w-[150px] md:min-w-[200px] lg:min-w-[150px] p-2 lg:h-10"
                />
              </Tooltip>
            </label>
          </div>
          <div className="mr-3.5 flex flex-row  flex-wrap items-center space-y-1">
            {addState ? (
              <div className=" btnFocus inline-block  bg-blue-600 m-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                <Tooltip title="show">
                  <button
                    type="button"
                    className="btnFocus  px-6 py-2.5"
                    onClick={() => {
                      setAdd(!add);
                    }}
                  >
                    Add
                  </button>
                </Tooltip>
              </div>
            ) : null}
            <div className=" btnFocus inline-block  bg-blue-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              <Tooltip title="show">
                <button type="button" className="btnFocus px-6 py-2.5">
                  filter
                </button>
              </Tooltip>
            </div>
            <div className=" btnFocus inline-block bg-blue-600 m-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              <Tooltip title="show">
                <button
                  type="button"
                  className="btnFocus px-6 py-2.5 "
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Show
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </Paper>
      <div className="flex flex-row">
        
      <div
        className={
          show
            ? `py-3 lg:px-4 text-xs md:text-base lg:text-lg  overflow-auto `
            : `py-3 lg:px-4 text-xs md:text-base lg:text-lg ${tableheight}   overflow-auto `
        }
      >
        <table className={` ${tableDesign} text-gray-800 font-light CrudTable`}>
          <thead className=" text-xs headerfont  ">
            <tr>
              {headerData.map((item, index) => {
                if (Object.keys(item)[0] === Object.keys(item)[index]) {
                  return (
                    <React.Fragment>
                      <th key={Object.values(item)}>
                        <div className="min-w-[50px]">
                          <CheckBoxdesign
                            beforeClicked={`${CheckDeletecolor}`}
                            ValueData={(e) => {
                              onSelectedAllCheck(e, item);
                            }}
                          />
                        </div>
                      </th>
                      <th className=" min-w-[30px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl">
                        Edit
                      </th>
                      <th className=" min-w-[30px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl">
                        Delete
                      </th>
                    </React.Fragment>
                  );
                }
                return (
                  <React.Fragment>
                    <React.Fragment key={index}>
                      <th className=" min-w-[150px] text-xs p-2.5 text-white bg-indigo-600 drop-shadow-2xl">
                        {item}
                      </th>
                    </React.Fragment>
                  </React.Fragment>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-gray-700 text-xs lg:text-base  leading-3  "
                >
                  {Object.keys(item).map((data, index) => {
                    if (Object.keys(item)[0] === Object.keys(item)[index]) {
                      return (
                        <React.Fragment>
                          <td key={Object.values(item)}>
                            <div className="-ml-2">
                              <CheckBoxdesign
                                IDvaluecheck={Object.values(item)[0]}
                                beforeClicked={`${CheckDeletecolor}`}
                                ValueData={(e) => {
                                  onselectcheck(e);
                                }}
                              />
                            </div>
                          </td>

                          <td>
                            <div>
                              <Tooltip
                                title="edit"
                                onClick={() => OnhandleEdit(item)}
                              >
                                <IconButton form="my_form1" type="submit">
                                  <CreateIcon sx={{ color: "pink" }} />
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
                                  <DeleteOutlineIcon sx={{ color: "pink" }} />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </td>
                        </React.Fragment>
                      );
                    }

                    return (
                      <Tooltip
                        key={index}
                        title={`${Object.keys(item)[index]}`}
                      >
                        <td onClick={() =>  OnhandleView(item)} onDoubleClick={()=> {OnhandleViewhidden(item)}}>
                          <p className="leading-2">{item[data]}</p>
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
      <div>
      {viewState ? View? <div>
<ViewEdit infoDataTask={headerData} viewDataedit={ViewData}  edittrigger={edit}  viewtrigger={View} setviewtrigger={setView}  /> 
</div>
 :null:null}
      </div>

      </div>
    </div>
  );
};

export default CrudTable;
