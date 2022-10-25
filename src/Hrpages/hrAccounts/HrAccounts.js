import React from "react";
import Header from "../../pages/Header";
import SingleAccountslist from "../../components/Hrcomponents/Account/SingleAccountslist";
import HrAccountable from "../../components/Hrtable/HrAccounttable/HrAccountable";
const HrAccounts = () => {
  return (
    <div className="bg-slate-300">
      <div>
        <Header
          pagehead="Hr Account"
          pageicon={<i className="material-icons">dashboard</i>}
        />
      </div>
      <div className="mx-2">
        <SingleAccountslist />
      </div>
      <div>
        <HrAccountable />
      </div>
    </div>
  );
};

export default HrAccounts;
