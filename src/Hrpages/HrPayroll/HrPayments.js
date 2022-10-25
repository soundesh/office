import React from "react";
import Header from "../../pages/Header";
import SinglePayview from "../../components/Hrcomponents/payment/SinglePayview";
import HrPayrolltable from "../../components/Hrtable/hrPayroll/HrPayrolltable";
const HrPayments = () => {
  return (
    <div className="bg-slate-300">
      <div>
        <Header
          pagehead="Payroll"
          pageicon={
            <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
          }
        />
      </div>
      <div>
        <SinglePayview />
      </div>
      <div>
        <HrPayrolltable />
      </div>
    </div>
  );
};

export default HrPayments;
