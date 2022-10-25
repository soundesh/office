import React from "react";
import CommonTable from "../../components/assitComponet/normaltable/CommonTable";

const Dashemptask = ({ initialData, headerData, title, Design }) => {
  const data = () => {
    var array1 = [];
    initialData.forEach((item) => {
      array1.push({ id: item.id, project: item.project, task: item.task });
    });
    return array1;
  };
  return (
    <div>
      <CommonTable
        initialData={data()}
        headerData={headerData}
        title={title}
        Design={Design}
      />
    </div>
  );
};

export default Dashemptask;
