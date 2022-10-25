import React, { useState, useEffect } from "react";

import CommonTable from '../../assitComponet/normaltable/CommonTable'
const initialState1 = [
  {
    id: "126",
    leavedate: "23/09/22",
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
    leavedate: "2/09/22",
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
    leavetype: "general",
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
const ThismonthLeave = () => {
  const [allData] = useState(initialState1);
  const [filteredData, setFilteredData] = useState(allData);

    const sortemonth = allData.filter((item) => {
      var dateA = item.leavedate.split("/")[1];
      var dateB = new Date().getMonth().toString().padStart(2, "0");
      return dateA === dateB;
    });
    sortemonth.sort(function compare(a, b) {
      var dateA = a.leavedate.split("/")[0];
      var dateB = b.leavedate.split("/")[0];
      return dateA - dateB;
    });
   const headerdata1=[
   
   "leavedate",
   "leavetype",
   "holiday"]

   const thismonthtitle="this "+ new Date().toLocaleString("default", { month: "long" })+" Month Leave"
   console.log( thismonthtitle)
  return (
    <div className="items-center min-h-52 bg-white  flex flex-column rounded-lg items-center justify-center">  
      <div>
      <CommonTable
                    initialData={  sortemonth}
                    headerData={headerdata1}
                    title={thismonthtitle}
                    Design=" min-h-[45vh] bg-white drop-shadow-xl hover: drop-shadow-2xl"
                  />
      </div>
    </div>
  );
};

export default ThismonthLeave;
