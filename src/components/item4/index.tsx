import React from "react";
import ImageCustom from "../imageCustom";
import { ItemPodCastRatting } from "@/models";

export interface Item4Prop {
  haveRatting?: boolean;
  item: ItemPodCastRatting;
}

const Item4 = ({ haveRatting, item }: Item4Prop) => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-[rgba(255,255,255,0.1)] py-3 rounded">
      {haveRatting && <div className="pl-3 font-semibold">{item.rank}</div>}
      <div className="w-[60px] h-[60px] relative rounded overflow-hidden mx-3">
        <ImageCustom src={item.imgUrl} alt="img" />
        <div className=""></div>
      </div>
      <div>
        <h4 className="text-sm font-semibold truncate">{item.title}</h4>
        <p className="text-xs text-gray-500 hover:text-purple-600">
          {item.subTitle}
        </p>
        <p className="flex items-center text-xs text-gray-500">
          <span>{item.createAt}</span>
          <span className="w-1 h-1 mx-2 bg-gray-500 rounded-full"></span>
          <span>{item.minute}</span>
        </p>
      </div>
    </div>
  );
};

export default Item4;
