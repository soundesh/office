import React, { useState } from "react";
import "./Dropdown.css";
const Dropdown = ({ listData, cssdata, selecting, name, setSelecting }) => {
  const [selected, setSelected] = useState("select");
  const data = (item) => {
    setSelecting({ ...selecting, name: item });
    setSelected(item);
  };
  // example to importing data
  //   <Dropdown
  //   listData={LeavetypeArray}
  //   cssdata={"bg-green-300 rounded-lg text-white"}
  //   selecting={CreateTaskData}
  //   name="leavetype"
  //   setSelecting={setCreateTaskData}
  // />
  return (
    <div>
      <div className="dropdown ">
        <div
          className={`${cssdata} p-2 min-w-[60px] focus:outline-none flex flex-row justify-center`}
        >
          {selected}
        </div>

        <div className="dropdown-content max-h-60 overflow-auto">
          {listData.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  data(item);
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
