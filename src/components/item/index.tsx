import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import imgLoading from "../../assets/img/loading-gif.gif";
import { Item } from "@/models";

export interface ItemProp {
  item: Item;
}

const Item = ({ item }: ItemProp) => {
  const myLoader = () => {
    return item.imgUrl;
  };
  return (
    <div>
      <div className="relative w-full h-[214px] overflow-hidden rounded-md itemImg cursor-pointer">
        <Image
          priority
          loader={myLoader}
          src={imgLoading}
          alt="img-music"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          className="img"
        />
        <div className="absolute top-0 left-0 flex items-center w-full h-full text-white transition-all justify-evenly hover:bg-black/50 modal">
          <div className="w-[30px] h-[30px] rounded-full hover:bg-gray-200/20 flex items-center justify-center">
            <AiOutlineHeart className="text-2xl" />
          </div>
          <BsPlayCircle className="w-11 h-11 icon" />
          <div className="w-[30px] h-[30px] rounded-full hover:bg-gray-200/20 flex items-center justify-center">
            <BiDotsHorizontalRounded className="text-2xl" />
          </div>
        </div>
      </div>
      {item.title && (
        <div className="mt-3 text-base font-bold truncate cursor-pointer hover:text-purple-600">
          {item.title}
        </div>
      )}
      {item.name && (
        <div className="mt-3 text-sm text-gray-400">{item.name}</div>
      )}
      {item.author && (
        <div className="font-normal text-gray-400 truncate">
          {item.author?.map((a, index) => {
            return (
              <span key={index}>
                <span className="cursor-pointer hover:text-purple-600">
                  {a}
                </span>
                {(item.author?.length as number) - 1 !== index && (
                  <span className="pr-1">,</span>
                )}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Item;
