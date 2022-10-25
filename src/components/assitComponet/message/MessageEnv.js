import React from "react";

const MessageEnv = () => {
  return (
    <div>
      <div className="flex flex-row">
        <p>
          <i className="fa-solid fa-envelope h-5 text-xl relative"></i>
        </p>
        <span className="-mt-2 -ml-2  px-1  bg-red-600 rounded-full max-h-6 z-10 items-center justify-center">
          4
        </span>
      </div>
    </div>
  );
};

export default MessageEnv;
