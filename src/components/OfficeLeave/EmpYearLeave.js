import React, { useState } from "react";
import CommonTable from "../assitComponet/normaltable/CommonTable";
import Tooltip from "@mui/material/Tooltip";
const empyearleave = [
  { id: "123", leavetype: "cl", Numdays: "8" },

  { id: "124", leavetype: "comp off", Numdays: "3" },

  { id: "125", leavetype: "HL", Numdays: "2" },
  { id: "123", leavetype: "EL", Numdays: "2" },
];


const employeeleveheade=["Leave Type","Number of days"]

const EmpYearLeave = () => {
  const [initialState] = useState(empyearleave);

  return (
    <div className="rounded-lg bg-white">
       <CommonTable
                    initialData={ empyearleave}
                    headerData={employeeleveheade}
                    title="Availabel leave"
                    Design=" min-h-[45vh] bg-white drop-shadow-xl hover: drop-shadow-2xl"
                  />
    </div>
  );
};

export default EmpYearLeave;
