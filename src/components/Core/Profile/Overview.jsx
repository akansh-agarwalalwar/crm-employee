import React from "react";

function Overview() {
  return (
    <div className="flex flex-row w-full gap-14">
      <div className="bg-white rounded-lg shadow-md p-4 w-full">
        <p className="font-semibold text-xl">Available Leave Days</p>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row justify-between items-center">
            <p>Annual Leave</p>
            <p>10 of 20 days</p>
          </div>
          <div>Chart</div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row justify-between items-center">
            <p>Sick Leave</p>
            <p>0 of 10 days</p>
          </div>
          <div>Chart</div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row justify-between items-center">
            <p>Maternity Leave</p>
            <p>5 of 14 days</p>
          </div>
          <div>Chart</div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 w-full">
        <p className="font-semibold text-xl">Roastered Leaves</p>
      </div>
    </div>
  );
}

export default Overview;
