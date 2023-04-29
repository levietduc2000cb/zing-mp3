import React from "react";
import ImageCustom from "../imageCustom";
import { BsPlayCircle } from "react-icons/bs";
import { Radio } from "@/models";

export interface Item2Prop {
  radio: Radio;
}

const Item2 = ({ radio }: Item2Prop) => {
  return (
    <div>
      <div className="w-36 h-36 rounded-full border-[4px] border-solid border-[#FF4B4A] relative item cursor-pointer">
        <div className="relative w-full h-full overflow-hidden rounded-full">
          <ImageCustom src={radio.imgTitle} alt="img" className="scale" />
        </div>
        <div className="absolute -right-1 top-[65%] rounded-full w-[52px] h-[52px] border border-black border-solid overflow-hidden z-10">
          <ImageCustom src={radio.imgAvatar} alt="img" />
        </div>
        <div className="z-10 absolute flex items-center justify-center h-4 text-xs -translate-x-1/2 bg-[#FF0A0A] -bottom-3 left-1/2 w-9 rounded">
          LIVE
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-hidden duration-200 rounded-full bg-black/50 appear">
          <BsPlayCircle className="w-11 h-11" />
        </div>
      </div>
      <h2 className="mt-5 text-lg font-semibold text-center">{radio.name}</h2>
      <p className="text-xs text-center text-gray-500">
        {radio.listener} đang nghe
      </p>
    </div>
  );
};

export default Item2;
