import React from "react";
import ImageCustom from "../imageCustom";
import { ItemPodCast } from "@/models";

export interface Item3Prop {
  itemPodCast: ItemPodCast;
}

const Item3 = ({ itemPodCast }: Item3Prop) => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[214px] rounded-md overflow-hidden">
        <ImageCustom
          src={itemPodCast.imgUrl}
          alt="img"
          className="duration-500 cursor-pointer hover:scale-110"
        />
      </div>
      <h3 className="py-2 text-base font-semibold text-left cursor-pointer hover:text-purple-600">
        {itemPodCast.title}
      </h3>
    </div>
  );
};

export default Item3;
