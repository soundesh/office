import React, { useState } from "react";
const initialState = [
  {
    id: "121",
    leavedate: "23/05/22",
    leavetype: "Festival",
    holiday: "deepavali",
  },
  {
    id: "122",
    leavedate: "2/03/22",
    leavetype: "Festival",

    holiday: "sri krishnar jemaasvvvvtami ",
  },
  {
    id: "123",
    leavedate: "2/03/22",
    leavetype: "Festival",
    holiday: "christmus",
  },
  {
    id: "124",
    leavedate: "2/03/22",
    leavetype: "Festival",
    holiday: "christmus",
  },
  {
    id: "125",
    leavedate: "2/03/22",
    leavetype: "Festival",
    holiday: "christmus",
  },
  {
    id: "126",
    leavedate: "30/03/22",
    leavetype: "Festival",
    holiday: "christmus",
  },
  {
    id: "127",
    leavedate: "2/04/22",
    leavetype: "Festival",
    holiday: "christmus",
  },

  {
    id: "128",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  { id: "129", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  { id: "130", leavedate: "2/03/22", leavetype: "RH", holiday: "mattu pongal" },

  {
    id: "131",
    leavedate: "2/01/22",
    leavetype: "General",
    holiday: "kannada rajyotsava",
  },

  {
    id: "132",
    leavedate: "23/01/22",
    leavetype: "National",
    holiday: "srikrishnar jemaavvvvstami",
  },
  {
    id: "133",
    leavedate: "12/05/22",
    leavetype: "National",
    holiday: "independance",
  },
];
const OfficeYearLeave = () => {
  const [initialStated] = useState(initialState);

  const [leaveType] = useState(["Festival", "RH", "General", "National"]);
  const [singleleaveType, setSingleleaveType] = useState("Festival");

  return (
    <div className="items-center min-h-52 bg-white rounded-lg font-sans ">
   
      <div>
        <div className="bg-white  p-2 ">
      <h1 className="headerfont bg-indigo-700 text-white mt-3 py-2 pl-5">
            {singleleaveType} Holidays
          </h1>

          <div className="flex flex-row p-1  ">
        {leaveType.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-400 border-b-2"
            >
               <button className=" btnFocus focus:bg-gray-200 py-2 px-3 border-b-4 border-gray-400 min-w-[100px] focus:border-b-4  focus:border-b-blue-500 "       
                onClick={() => {
                  setSingleleaveType(item);
                }}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
          {initialStated.map((item, index) => {
            if (item.leavetype === singleleaveType) {
              return (
                <div key={index} className="flex flex-row itmes-center justify-start pl-10">
                  
                        
                  <div className="flex flex-row space-x-4 min-w-[300px] border-gray-400 border-b-2 text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                    <div className="min-w-[70px]">{item.leavedate}</div>
                    <div>{item.holiday}</div>
                  </div>
                </div>
              );
            }
            return <React.Fragment key={index}></React.Fragment>;
          })}
        </div>
      </div>
    </div>
  );
};

export default OfficeYearLeave;
