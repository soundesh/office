import React from "react";
import Paper from "@mui/material/Paper";

const SingleDetail = ({ title, singleData }) => {
  return (
    <div className="flex items-center flex-row py-1 px-2  ">
      <h3 className="text-blue-500 font-serif font-medium uppercase lg:min-w-[90px] ">{title}</h3>
      <div className="text-gray-500 text-xs lg:text-sm md:text-sm flex  max-w-[300px] px-3 py-1">
        : {singleData}
      </div>
    </div>
  );
};

export default SingleDetail;
