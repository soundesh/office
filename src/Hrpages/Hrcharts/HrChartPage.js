import React from "react";
import Header from "../../pages/Header";

import AccountChart from "../../components/HrCharts/AccountChart";

import YearRevenuChat from "../../components/HrCharts/YearRevenuChat";

import TragetChart from "../../components/HrCharts/TargetChart";
const HrChartPage = () => {
  return (
    <div className="bg-slate-200">
      <div>
        <Header
          pagehead="Hr Dashboard"
          pageicon={<i className="fa-sharp fa-solid fa-chart-simple"></i>}
        />
      </div>
      <div>
        <TragetChart />
      </div>
      <div>
        <div>
          <YearRevenuChat />
        </div>
      </div>
      <div>
        <div>
          <AccountChart />
        </div>
      </div>
    </div>
  );
};

export default HrChartPage;
