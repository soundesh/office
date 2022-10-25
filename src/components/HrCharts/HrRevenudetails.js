import React from "react";
const HrRevenudetails = () => {
  return (
    <div className="flex flex-column">
      <h1 className="mb-2 text-xl">revenue Target data </h1>
      <div className="flex flex-column w-full items-center justify-center">
        <p>Average:3000000</p>
        <p>Profit:2000000</p>
        <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
          <label htmlFor="empremarks" className="min-w-[110px]">
            Revenue
          </label>
          <textarea
            id="empremarks"
            name="empremarks"
            type="text"
            rows="2"
            cols="30"
            form="my_form2"
            placeholder="target next month"
            className="resize-none border-purple-800 rounded-md border-2 -ml-10"
            maxLength="70"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default HrRevenudetails;
