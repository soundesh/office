import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import HrRevenudetails from "./HrRevenudetails";
Chart.register(...registerables);
const TargetChart = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      <div className="lg:min-w-[50%] lg:max-w-[50%] hover:shadow-2xl hover:lg:min-w-[80%] min-w-full lg:p-5 datalist flex flex-column ">
        <h1 className="mb-2 text-xl">revenue Target data </h1>
        <div className="flex flex-row items-center  justify-center">
          <div className="space-x-3">
            <p>Average:3000000</p>
            <p>Profit:2000000</p>
          </div>
        </div>
        <Bar
          data={{
            labels: [
              "jan",
              "feb",
              "mar",
              "apr",
              "may",
              "jun",
              "jul",
              "aug",
              "sept",
              "oct",
              "nov",
              "dec",
            ],
            datasets: [
              {
                label: "target",
                data: [
                  100, 200, 300, 400, 500, 600, 300, 400, 500, 350, 456, 572,
                ],
                backgroundColor: "#4682B4",
              },
              {
                label: "revenue",
                data: [150, 120, 350, 440],
                backgroundColor: "#FA8072",
              },
            ],
          }}
        ></Bar>
      </div>
      <div>
        <HrRevenudetails />
      </div>
    </div>
  );
};

export default TargetChart;
