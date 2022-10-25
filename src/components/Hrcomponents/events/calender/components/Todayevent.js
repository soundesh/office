import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const Todayevent = () => {
  const state = useContext(GlobalContext);

  const data = state.savedEvents.map((item, index) => {
    if (
      new Date(item.day).getMonth() === new Date(Date.now()).getMonth() &&
      new Date(item.day).getDate() === new Date(Date.now()).getDate()
    ) {
      return (
        <div
          key={index}
          className={`bg-${item.label}-300 flex grow p-2 m-2 min-w-[150px] flex-column rounded-lg overflow-auto  shadow-md hover:shadow-2xl items-center `}
        >
          <h1 className="shadow-md hover:shadow-2xl bg-black text-white flex items-start mb-2  p-2 rounded-lg">
            {item.title}
          </h1>
          <div>{item.description}</div>
        </div>
      );
    }
    return <React.Fragment key={index}></React.Fragment>;
  });

  return (
    <div>
      <h3 className="shadow-md hover:shadow-2xl bg-black text-white flex justify-center mb-2  py-2 rounded-lg">
        Today event
      </h3>
      <div className="space-y-2 flex flex-row grow">{data}</div>
    </div>
  );
};

export default Todayevent;
