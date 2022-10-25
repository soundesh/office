import React from "react";
import { Paper } from "@mui/material";
const data = [
  {
    id: "121",
    department: "web development",
    Monthincome: [30000, 3000, 4000, 5000, 6000, 33000, 40000],
  },
  {
    id: "122",
    department: "3D development",
    Monthincome: [3000, 3000, 4000, 5000, 6000, 33000, 40000],
  },
  {
    id: "123",
    department: "Sales development",
    Monthincome: [3000, 3000, 4000, 33000, 40000],
  },
  {
    id: "124",
    department: "app development",
    Monthincome: [3000, 3000, 4000, 5000, 6000, 33000, 40000],
  },
  {
    id: "125",
    department: "web development",
    Monthincome: [3000, 3000, 4000, 5000, 6000, 33000, 40000],
  },
];
const SinglePayview = () => {
  const monthpercentdata = data.map((item, index) => {
    var data2 =
      (item.Monthincome[item.Monthincome.length - 1] /
        item.Monthincome[item.Monthincome.length - 2]) *
        100 -
      100;
    const upanddownpercent = data2.toFixed(2);
    if (upanddownpercent < 0) {
      return (
        <div className="mr-2" key={index}>
          <Paper elevation={3}>
            <div className="datalist flex flex-column addEmpForm  max-h-[200px]  min-h-[200px]">
              <h1 className="text-xl text-blue-600 ">{item.department}</h1>
              <p className="text-3xl">
                {item.Monthincome[item.Monthincome.length - 1]}
              </p>
              <div>
                <p>
                  <i
                    className="fa fa-long-arrow-down text-red-700 text-2xl font-bold mr-2"
                    aria-hidden="true"
                  ></i>
                  <span className="text-xl text-red-700 font-sans -ml-1">
                    {upanddownpercent}
                  </span>
                  Since last month
                </p>
              </div>
            </div>
          </Paper>
        </div>
      );
    }
    if (upanddownpercent > 0) {
      return (
        <div className="mr-2" key={index}>
          <Paper elevation={3}>
            <div className="datalist flex flex-column addEmpForm max-h-[200px]  min-h-[200px] ">
              <h1 className="text-xl text-blue-600 font-bold">
                {item.department}
              </h1>
              <p className="text-3xl ">
                {item.Monthincome[item.Monthincome.length - 1]}
              </p>
              <div>
                <p>
                  <i
                    className="fa fa-long-arrow-up text-green-700 text-2xl font-bold mr-2"
                    aria-hidden="true"
                  ></i>
                  <span className="text-xl text-green-700 font-sans mr-2">
                    {upanddownpercent}
                  </span>
                  Since last month
                </p>
              </div>
            </div>
          </Paper>
        </div>
      );
    }
    return <React.Fragment key={index}></React.Fragment>;
  });

  return <div className="flex flex-row text-gray-700 ">{monthpercentdata}</div>;
};

export default SinglePayview;
