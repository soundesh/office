import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import CreateEventButton from "./CreateEventButton";
import Labels from "./Labels";
import { Paper } from "@mui/material";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <Paper>
      <header className="px-4 py-2 flex items-center justify-between">
        <div className="flex flex-column items-center justfiy-items-center">
          <div className="flex flex-row space-x-2">
            <CreateEventButton />
          </div>
        </div>
        <div>
          <Labels />
        </div>
        <div className="px-4 py-2 flex items-center">
          <h2 className="mx-1 text-xl text-gray-500 font-bold ml-2">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </h2>

          <button onClick={handlePrevMonth}>
            <i
              className="fa fa-chevron-circle-left px-1 cursor-pointer text-gray-600 "
              aria-hidden="true"
            ></i>
          </button>

          <button onClick={handleNextMonth}>
            <i
              className="fa fa-chevron-circle-right cursor-pointer text-gray-600 mx-2"
              aria-hidden="true"
            ></i>
          </button>
          <button
            onClick={handleReset}
            className="border p-2 px-4  rounded-full flex items-center shadow-md hover:shadow-2xl bg-green-300 focus:outline-none"
          >
            <span>Reset </span>
          </button>
        </div>
      </header>
    </Paper>
  );
}
