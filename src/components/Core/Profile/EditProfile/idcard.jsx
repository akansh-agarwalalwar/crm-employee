import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosPrint } from "react-icons/io";

function idcard() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-end gap-2 items-center">
        <div className="bg-[#888888] p-2 rounded-lg text-[#03346E]">
          <MdOutlineFileDownload size={20} />
        </div>
        <div className="bg-[#888888] p-2 rounded-lg text-[#03346E]">
          <IoIosPrint size={20} />
        </div>
      </div>
    </div>
  );
}

export default idcard;
