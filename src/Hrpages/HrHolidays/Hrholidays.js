import React from "react";
import Header from "../../pages/Header";
import OfficeYearLeave from "../../components/OfficeLeave/OfficeYearLeave";
import Hrholidaytable from "../../components/Hrtable/hrholidaytable/Hrholidaytable";
import ThismonthLeave from "../../components/Hrcomponents/HrHolidays/ThismonthLeave";
const Hrholidays = () => {
  return (
    <div className="overflow-auto bg-gray-400">
      <div>
        <Header
          pagehead="holidays"
          pageicon={<i className="material-icons">dashboard</i>}
        />
      </div>
      <div>
        <div className="ml-1 flex flex-row ">
          <div className="m-1 bg-white min-h-64 p-1 rounded-lg ">
            <ThismonthLeave />
          </div>
          <div>
            <OfficeYearLeave />
          </div>
        </div>
        <div className="ml-3.5">
          <Hrholidaytable />
        </div>
      </div>
    </div>
  );
};

export default Hrholidays;
