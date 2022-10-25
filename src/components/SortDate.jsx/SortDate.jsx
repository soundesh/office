import React from "react";
import Paper from "@mui/material/Paper";
import SelectorFrom from "../assitComponet/SelectorFrom";
import Updown from "../../img/updown.png";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
//<SelectorFrom labeled="" sizewidth="" Date="" />
const SortDate = () => {
  return (
    <Paper
      elevation={3}
      className="overflow-auto my-1 py-1 w-full flex flex-row items-center  space-x-4"
    >
      <button className=" bg-indigo-400 flex  p-1 rounded-lg shadow hover:shadow-lg outline-hidden border-none  items-center">
        <i className="fa-solid fa-plus  "></i>
        <p>ADD</p>
      </button>
      <div className="flex flex-row items-center text-gray-400">
        <img src={Updown} width="20" alt="sort" />
        <p>sort</p>
      </div>

      <div className="flex flex-row  space-x-1  items-center">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <SelectorFrom labeled="Date" sizewidth="15" Date="18 oct 2021" />
      </div>
      <div className="flex flex-row  space-x-1  items-center">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <SelectorFrom labeled="Week" sizewidth="12" Date="45" />
      </div>
      <div className="flex flex-row  space-x-1  items-center">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <SelectorFrom labeled="Month" sizewidth="15" Date="december" />
      </div>
      <div className="flex flex-row items-center">
        <DisplaySettingsIcon />
        <p>display</p>
      </div>
    </Paper>
  );
};

export default SortDate;
