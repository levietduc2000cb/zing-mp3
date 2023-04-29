import React from "react";
import Item3 from "../item3";
import ImageCustom from "../imageCustom";
import { ItemPodCast } from "@/models";

export interface ItemList3Prop {
  title: string;
  subTitle?: string;
  imgTitle?: string;
  items: ItemPodCast[];
}

const ItemList3 = ({ title, subTitle, imgTitle, items }: ItemList3Prop) => {
  return (
    <div className="mt-12 text-white">
      {subTitle && imgTitle ? (
        <div className="flex gap-x-[10px] pb-5">
          <div className="relative w-[50px] h-[50px] rounded overflow-hidden">
            <ImageCustom src={imgTitle} alt="img" />
          </div>
          <div>
            <h2 className="text-sm text-gray-500 uppercase">{subTitle}</h2>
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
        </div>
      ) : (
        <h2 className="pb-5 text-xl font-bold">{title}</h2>
      )}
      <div className="grid grid-cols-5 grid-rows-1 gap-x-7">
        {items?.map((item: ItemPodCast) => {
          return <Item3 key={item.id} itemPodCast={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemList3;
