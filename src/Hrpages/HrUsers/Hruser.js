import React from "react";
import Header from "../../pages/Header";
import { Paper } from "@mui/material";
import SelectorFrom from "../../components/assitComponet/SelectorFrom";
import Hrusertable from "../../components/Hrtable/usertable/Hrusertable";

import "./Hruser.css";
const Hruser = () => {
  const onchangefilter = (e) => {};

  const yearData = () => {
    let year = [
      2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
      2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040,
      2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
    ];
    const yearData = year.filter((item) => {
      let d = new Date();
      let currYear = d.getFullYear();
      return item <= currYear;
    });
    return yearData.reverse();
  };

  return (
    <div className="bg-slate-300">
      <div>
        <Header
          pagehead="User "
          pageicon={<i className="material-icons">dashboard</i>}
        />
      </div>
      <div>
        <Paper
          elevation={3}
          className="overflow-auto py-1 max-w-[450px] flex flex-row items-center  p-1 space-x-1 justify-center"
        >
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-teal-300 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Year"
              OptionData={yearData()}
              sizewidth="15"
              Date="18 oct 2021"
              onChange={onchangefilter}
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-rose-300 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Week"
              OptionData={yearData()}
              sizewidth="12"
              Date="45"
              onChange={onchangefilter}
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-yellow-400 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Month"
              OptionData={yearData()}
              sizewidth="15"
              Date="december"
              onChange={onchangefilter}
            />
          </div>
        </Paper>
      </div>

      <div>
        <Hrusertable />
      </div>
    </div>
  );
};

export default Hruser;
