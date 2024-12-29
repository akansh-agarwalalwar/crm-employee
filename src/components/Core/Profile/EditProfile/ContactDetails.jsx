import React from "react";

function ContactDetails() {
  return (
    <div className="w-full flex p-4 flex-col gap-5">
      <div className="flex flex-row w-full justify-between gap-5">
        <div className="flex flex-col gap-2 w-full ">
          <label>Phone Number 1</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            required
            className="bg-[#E3EDF9] rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Emergency Contact</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Emergency Contact"
            className="bg-[#E3EDF9] rounded-md p-2"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          required
          className="bg-[#E3EDF9] rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>City Of Residence</label>
        <input
          type="text"
          placeholder="City Of Address"
          required
          className="bg-[#E3EDF9] rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Residential Address</label>
        <input
          type="text"
          placeholder="United States"
          required
          className="bg-[#E3EDF9] rounded-md p-2"
          rows="4"
        />
      </div>
      <button className="bg-[#03346E] p-2 rounded-md shadow-md w-auto text-white">
        Take Approval
      </button>
    </div>
  );
}

export default ContactDetails;
