import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <div className="flex flex-row space-x-2 items-center">
        {labels.map(({ label: lbl, checked }, idx) => (
          <React.Fragment key={idx}>
            <label className="items-center mt-3 block">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => updateLabel({ label: lbl, checked: !checked })}
                className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
              />
            </label>
            <div
              className={`ml-2 text-gray-700 bg-${lbl}-400 p-1 items-center rounded-lg  capitalize`}
            >
              {lbl}
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}
