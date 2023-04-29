import React from "react";
import ImageCustom from "@/components/imageCustom";
import { ItemTitle } from "../..";

export interface ItemListThemeAndTypeProp {
  title: string;
  items: ItemTitle[];
}

const ItemListThemeAndType = ({ title, items }: ItemListThemeAndTypeProp) => {
  return (
    <div className="mt-[49px]">
      <h3 className="mb-5 text-xl font-bold text-white capitalize">{title}</h3>
      <div className="grid grid-cols-4 h-[154px] gap-x-7">
        {items?.map((item: ItemTitle) => {
          return (
            <div className="relative w-full h-full" key={item.id}>
              <ImageCustom src={item.imgUrl} alt="img" className="rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white text-[26px] font-bold capitalize">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListThemeAndType;
