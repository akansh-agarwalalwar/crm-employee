import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosPrint } from "react-icons/io";
import IDCARD from "../../../../assets/IDCARD.png";
function idcard() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-end gap-2 items-center">
        <div className="bg-[#8888881A] p-2 rounded-lg text-[#03346E]">
          <MdOutlineFileDownload size={20} />
        </div>
        <div className="bg-[#8888881A] p-2 rounded-lg text-[#03346E]">
          <IoIosPrint size={20} />
        </div>
      </div>
      <img src={IDCARD} alt="IDCARD" className="w-full h-auto mt-4" />
    </div>
  );
}

export default idcard;