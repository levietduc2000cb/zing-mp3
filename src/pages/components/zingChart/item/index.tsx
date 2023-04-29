import ImageCustom from "@/components/imageCustom";
import { ItemSongRatting } from "@/models";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

export interface ItemProp {
  item: Omit<ItemSongRatting, "createAt">;
}

const Item = ({ item }: ItemProp) => {
  return (
    <li className="flex items-center justify-between p-3 rounded-md bg-grayPrimary/10 hover:bg-grayPrimary/40 item">
      <div className="flex items-center">
        <h2
          className={`text-[32px] font-black mx-4 leading-none ${`strokeText${
            item.rank + 2
          }`} text-transparent`}
        >
          {item.rank}
        </h2>
        <div className="w-[60px] h-[60px] relative mr-3 rounded-md overflow-hidden">
          <ImageCustom src={item.imgUrl} alt="img" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full duration-200 cursor-pointer bg-black/50 appear">
            <BsFillPlayFill className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-medium">{item.name}</h2>
          <div className="text-xs text-[#ffffff]">
            {item.author?.map((a, index) => {
              return (
                <span key={index}>
                  <span className="hover:text-[#c273ed] hover:underline cursor-pointer">
                    {a}
                  </span>
                  {item.author.length - 1 !== index && (
                    <span className="pr-1">,</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-xl font-bold">{`${Math.floor(
        70 / item.rank
      )}%`}</div>
    </li>
  );
};

export default Item;
