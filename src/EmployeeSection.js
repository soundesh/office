import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import EmpTask from "./pages/task/EmpTask";
import EmpLeaveSchedule from "./pages/empleavemanage/EmpLeaveSchedule";
import AssignTask from "./pages/AssignTask/AssignTask";
import { DataProvider } from "./GlobalState";

//Hradmin

import HrDashboard from "./Hrpages/HrDashboard/HrDashboard";
import HrAccounts from "./Hrpages/hrAccounts/HrAccounts";
import HrPayments from "./Hrpages/HrPayroll/HrPayments";
import HrReports from "./Hrpages/HrReports/HrReports";
import Hrevents from "./Hrpages/Hrevents/Hrevents";
import Hrholidays from "./Hrpages/HrHolidays/Hrholidays";
import Hruser from "./Hrpages/HrUsers/Hruser";
import HrChartPage from "./Hrpages/Hrcharts/HrChartPage";

//auth
import Login from "./components/AuthComponent/Login";
import Forgot from "./components/AuthComponent/Forgot";
const EmployeeSection = () => {
  return (
    <DataProvider>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/emptask" element={<EmpTask />} />

          <Route path="/empleave" element={<EmpLeaveSchedule />} />
          <Route path="/assigntask" element={<AssignTask />} />

          <Route path="/comment" element={<Comment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />

          {/* hr dashboard*/}
          <Route path="/hrdashboard" element={<HrDashboard />} />
          <Route path="/hraccounts" element={<HrAccounts />} />
          <Route path="/hrholidays" element={<Hrholidays />} />

          <Route path="/hruser" element={<Hruser />} />
          <Route path="/hrpayroll" element={<HrPayments />} />
          <Route path="/hrreports" element={<HrReports />} />
          <Route path="/hrevents" element={<Hrevents />} />
          <Route path="/hrCharts" element={<HrChartPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </Sidebar>
    </DataProvider>
  );
};

export default EmployeeSection;
