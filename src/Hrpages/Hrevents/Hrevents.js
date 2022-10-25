import React from "react";
import HrCalender from "../../components/Hrcomponents/events/calender/HrCalender";
import Header from "../../pages/Header";
const Hrevents = () => {
  //hr calender filtering that month data
  return (
    <div className="bg-white overflow-auto">
      <Header
        pagehead="Hr event"
        pageicon={<i className="material-icons">dashboard</i>}
      />
      <HrCalender />
    </div>
  );
};

export default Hrevents;
