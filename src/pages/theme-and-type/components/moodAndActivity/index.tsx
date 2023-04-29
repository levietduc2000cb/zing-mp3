import ImageCustom from "@/components/imageCustom";
import React from "react";
import { MoodAndActivityType } from "../../index";

export interface MoodAndActivityProp {
  items: MoodAndActivityType[];
}

const MoodAndActivity = ({ items }: MoodAndActivityProp) => {
  return (
    <div className="mt-[49px]">
      <h3 className="mb-5 text-xl font-bold text-white capitalize">
        tâm trạng và hoạt động
      </h3>
      <div className="grid grid-cols-4 grid-rows-2 gap-7">
        {items?.map((item: MoodAndActivityType) => {
          return (
            <div
              className="relative w-full overflow-hidden rounded item h-[154px]"
              key={item.id}
            >
              <ImageCustom
                src={item.imgTitle}
                alt="img-bg"
                className="rounded-md scale brightness-75"
              />
              <div className="absolute bottom-0 p-3">
                <div className="mb-[11px] font-bold text-lg uppercase text-white">
                  {item.title}
                </div>
                <div className="flex gap-x-1">
                  {item.subImgList?.map((subImg, index) => {
                    return (
                      <div
                        className="relative w-[50px] h-[50px] rounded-md overflow-hidden"
                        key={index}
                      >
                        <ImageCustom src={subImg} alt="sub-img" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodAndActivity;
