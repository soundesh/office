import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const YearRevenuChat = () => {
  return (
    <div className="flex flex-wrap flex-row bg-slate-200 justify-center">
      <div className="lg:min-w-[40%] lg:max-w-[40%] hover:shadow-2xl hover:lg:min-w-[55%]  hover:lg:min-h-[55%]  lg:p-5 datalist flex flex-column ">
        <h1 className="mb-2 text-xl">Last five years </h1>
        <div className="flex flex-row items-center  justify-center">
          <div className="space-x-3">
            <p>Average:3000000</p>
            <p>Revenue:2000000</p>
          </div>
          <div className="space-x-3 ">
            <p>expenses:2000000</p>
            <p>Profit:2000000</p>
          </div>
        </div>
        <Bar
          data={{
            labels: ["jan", "feb", "mar", "apr", "may", "jun"],
            datasets: [
              {
                label: "revenue",
                data: [100, 200, 300, 400, 500, 600],
                backgroundColor: "#4682B4",
              },
              {
                label: "expenses",
                data: [150, 120, 350, 440, 500, 600],
                backgroundColor: "#FA8072",
              },
              {
                label: "Profit",
                data: [100, 300, -200, 400, 100, 600],
                backgroundColor: "green",
              },
            ],
          }}
        ></Bar>
      </div>

      <div className="lg:min-w-[40%] lg:max-w-[40%] lg:p-5 datalist  hover:shadow-2xl hover:lg:min-w-[52%]  flex flex-column">
        <h1 className="mb-2 text-xl">last year</h1>
        <div className="flex flex-row items-center  justify-center">
          <div className="space-x-3">
            <p>Average:3000000</p>
            <p>Revenue:2000000</p>
          </div>
          <div className="space-x-3 ">
            <p>expenses:2000000</p>
            <p>Profit:2000000</p>
          </div>
        </div>
        <Bar
          data={{
            labels: ["jan", "feb", "mar", "apr", "may", "jun"],
            datasets: [
              {
                label: "revenue",
                data: [100, 200, 300, 400, 500, 600],
                backgroundColor: "#4682B4",
              },
              {
                label: "expenses",
                data: [150, 120, 350, 440, 500, 600],
                backgroundColor: "#FA8072",
              },
              {
                label: "Profit",
                data: [100, 300, -200, 400, 100, 600],
                backgroundColor: "green",
              },
            ],
          }}
        ></Bar>
      </div>
    </div>
  );
};

export default YearRevenuChat;
