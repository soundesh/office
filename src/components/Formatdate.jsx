import React from "react";

const Formatdate = () => {
  const datetime = new Date();
  return (
    <>
      {datetime.getDate()}th
      {datetime.toLocaleString("default", { month: "short" })}{" "}
      {datetime.getFullYear()}
    </>
  );
};

export default Formatdate;
