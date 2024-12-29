import React, { useState } from "react";
import { IoBookSharp } from "react-icons/io5";
import ThumbUp from "../../../../assets/thumbsup.svg";

function ApplyLeave() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    duration: "",
    resumptionDate: "",
    reason: "",
    handoverDocument: null,
    reliefOfficer: "",
  });

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleReset = () => {
    setFormData({
      leaveType: "",
      startDate: "",
      endDate: "",
      duration: "",
      resumptionDate: "",
      reason: "",
      handoverDocument: null,
      reliefOfficer: "",
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="w-full relative h-screen flex flex-col justify-center items-center px-10 bg-[#E3EDF9] overflow-y-auto scrollbar-hide pt-24">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-[30%] text-[#03346E]">
            <img
              src={ThumbUp}
              alt="Thumbs Up"
              className="w-52 h-52 mx-auto mb-2"
            />
            <p className="text-2xl font-semibold mb-2">Good Job!</p>
            <p className="text-2xl font-semibold mb-4">
              Your leave application would be reviewed by the HR Department.
            </p>
            <button
              className="bg-[#03346E] p-2 rounded-xl text-white shadow-lg font-semibold w-full"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="bg-white p-4 w-full items-center flex mb-4 rounded-md mt-48">
        <p className="text-black">Dashboard &gt; Apply For Leave</p>
      </div>
      <div className="px-56 w-full mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="flex flex-row items-center gap-4 justify-center mb-2">
            <IoBookSharp size={30} />
            <p className="text-3xl font-semibold text-gray-700">
              Leave Application
            </p>
          </div>
          <p className=" mb-4 text-center text-xl">
            Fill the required fields below to apply for annual leave.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Leave Type</label>
              <input
                type="text"
                name="leaveType"
                placeholder="Annual Leave"
                className="p-2 rounded-md bg-[#E3EDF9]"
                value={formData.leaveType}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-1/2">
                <label className="font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="p-2 bg-[#E3EDF9] rounded-md"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label className="font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="p-2 bg-[#E3EDF9] rounded-md"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-1/2">
                <label className="font-medium text-gray-700">Duration</label>
                <input
                  type="number"
                  name="duration"
                  placeholder="Number of Days"
                  className="p-2 bg-[#E3EDF9] rounded-md"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label className="font-medium text-gray-700">
                  Resumption Date
                </label>
                <input
                  type="date"
                  name="resumptionDate"
                  className="p-2 bg-[#E3EDF9] rounded-md"
                  value={formData.resumptionDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Reason</label>
              <textarea
                name="reason"
                placeholder="Reason for leave"
                rows="3"
                className="p-2 bg-[#E3EDF9] rounded-md"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Attach handover document (pdf, jpg, docx or any other format)
              </label>
              <input
                type="file"
                name="handoverDocument"
                className="p-2 bg-[#E3EDF9] rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Choose Relief Officer
              </label>
              <select
                name="reliefOfficer"
                className="p-2 bg-[#E3EDF9] rounded-md"
                value={formData.reliefOfficer}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <button
                className="bg-[#03346E] p-2 rounded-xl text-white px-8 w-full font-semibold"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="border-2 border-[#F50707] p-2 rounded-xl text-[#F50707] px-8 w-full font-semibold"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyLeave;
