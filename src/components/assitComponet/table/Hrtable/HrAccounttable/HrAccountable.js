import React from "react";
import HrCustomerPaidtable from "./HrCustomerPaidtable";
import EmpolyeeTable from "../../EmployeeTable/EmpolyeeTable";
const data = [
  {
    id: "12333",
    customerId: "AD1233",
    customerName: "soundesh",
    ProjectName: "Office COnnect",
    servicetype: "web development",
    projectdescription: "some suggestions",
    acceptdate: "02/03/22",
    deliveryDate: "04/05/16",
    Ammount: "6,00,000",
    listPayment: ["2,00,00", "4,00,000"],
    listPaymentDate: ["04/05/22", "17/05/22"],
    Projectstatus: "pending", // pending ,done , not Start,
    mobile: "1234567890",
    altenatemobile: "1234567890",
    email: "soundesh@gmail.com",
    address: "124353445645 steert particulr country",
  },
];

const HrAccountable = () => {
  return (
    <div>
      <div>
        <HrCustomerPaidtable />
      </div>
      <div>
        <div>
          <EmpolyeeTable
            initialData={data}
            title="pending project list
          "
          />
        </div>
      </div>
    </div>
  );
};

export default HrAccountable;
