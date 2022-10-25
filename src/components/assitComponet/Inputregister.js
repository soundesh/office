import React from "react";

const Inputregister = (title, typeData, onfunction, size) => {
  return (
    <div>
      <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
        <label htmlFor={typeData}>{title}</label>
        <input
          id={typeData}
          type="text"
          name={typeData}
          form="my_form2"
          placeholder={`enter ${title}`}
          size={size}
          onChange={onfunction}
          className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
        />
      </div>
    </div>
  );
};

export default Inputregister;
