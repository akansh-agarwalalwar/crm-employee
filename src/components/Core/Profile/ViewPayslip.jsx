import React from "react";

function ViewPayslip() {
  const payslip = [
    {
      paymentNumber: "1234567890",
      month: "Jan",
      deduction: "1000",
      date: "12/12/2021",
      netSalary: "10,000",
      status: "Pending",
    },
    {
      paymentNumber: "0987654321",
      month: "Feb",
      deduction: "500",
      date: "12/02/2022",
      netSalary: "10,500",
      status: "Approved",
    },
  ];

  return (
    <div className="w-full">
      {payslip.map((slip, index) => (
        <div key={index} className="p-4 mb-4 rounded-lg bg-white">
          <div className="flex justify-between items-center w-full border-b-2 p-2">
            <p className="font-semibold">
              Payment Number:{" "}
              <span className="font-semibold">{slip.paymentNumber}</span>
            </p>
            <p className="font-semibold">
              <span className="font-normal">{slip.status}</span>
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-2">
            <p className="font-light text-sm">Month</p>
            <span className="font-normal">{slip.month}</span>
          </div>
          <div className="flex justify-between items-center w-full px-2">
            <p className="font-light text-sm">Deduction</p>
            <span className="font-normal">{slip.deduction}</span>
          </div>
          <div className="flex justify-between items-center w-full px-2">
            <p className="font-light text-sm">Date</p>
            <span className="font-normal">{slip.date}</span>
          </div>
          <div className="flex justify-between items-center w-full p-2">
            <p className="font-semibold">Net Salary</p>
            <span className="font-bold">{slip.netSalary}</span>
          </div>
          <button className=" w-full border border-[#3578FF] bg-[#D9E8FF] rounded-full text-[#3578FF] text-sm p-2">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewPayslip;
