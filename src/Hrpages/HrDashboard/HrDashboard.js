import React from "react";
import Header from "../../pages/Header";
import "./Hrdashboard.css";
import Navpages from "./Navpages";
import Chart1 from "../../components/HrCharts/Chart1";
import AccountChart from "../../components/HrCharts/AccountChart";
const HrDashboard = () => {
  return (
    <div className="bg-slate-200">
      <div>
        <Header
          pagehead="Hr Dashboard"
          pageicon={<i className="material-icons">dashboard</i>}
        />
      </div>

      <div>
        <Navpages />
      </div>
      <div>
        <Chart1 />
      </div>
      <div>
        <AccountChart />
      </div>
    </div>
  );
};

export default HrDashboard;
