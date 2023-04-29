import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiVipDiamondLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
// w-[calc(100vw-240px)]
// -mx-14 px-14
export default function Header() {
  return (
    <div className="h-[70px] bg-[#170F23] fixed text-white flex items-center justify-between w-[calc(100vw-5px)] md:w-[calc(100vw-257px)] z-50 -ml-14 px-14">
      <div className="flex items-center flex-1">
        <div className="flex gap-6">
          <AiOutlineArrowLeft className="w-5 h-5 text-[#443E4E] cursor-pointer" />
          <AiOutlineArrowRight className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="w-full max-w-[443px] flex items-center bg-lightPurple py-2 px-2 rounded-full mx-5">
          <BiSearch className="w-6 h-6 text-[#C6C5C7]" />
          <input
            type="text"
            className="w-full ml-2 text-sm bg-transparent border-none outline-none"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-lightPurple hover:opacity-90">
          <RiVipDiamondLine className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-lightPurple hover:opacity-90">
          <AiOutlineSetting className="w-5 h-5" />
        </div>
        <button className="px-6 py-2 font-bold text-white rounded-full bg-purple">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
