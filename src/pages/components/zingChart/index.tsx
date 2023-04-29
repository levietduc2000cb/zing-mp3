import React from "react";
import ImageCustom from "@/components/imageCustom";
import { BsFillPlayCircleFill, BsFillPlayFill } from "react-icons/bs";
import Item from "./item";
import { ItemSongRatting } from "@/models";
import Chart from "@/components/chart";

const LIST_ZINGCHART: Omit<ItemSongRatting, "createAt">[] = [
  {
    id: 1,
    name: "Trách Duyên Trách Phận",
    author: ["Đỗ Thành Duy Nhật", "TNH4"],
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2023/02/21/5/9/1/6/1676973445349.jpg",
    rank: 1,
  },
  {
    id: 2,
    name: "Ánh Sao Và Bầu Trời",
    author: ["Đỗ Thành Duy Nhật"],
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2021/09/09/f/c/f/d/1631155238247.jpg",
    rank: 2,
  },
  {
    id: 3,
    name: "Chuyện Đôi Ta",
    author: ["Nguyễn Duy Hoàng"],
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2021/11/25/8/7/5/6/1637809824703.jpg",
    rank: 3,
  },
];

const ZingChart = () => {
  return (
    <div>
      <div className="p-5 text-white bg-[#3C1657] rounded-xl">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gradient color-gradient">
            #zingchart
          </span>
          <BsFillPlayCircleFill className="w-6 h-6" />
        </div>
        <div className="flex gap-[5%]">
          <ul className="w-[45%] mt-5 gap-y-5 flex flex-col">
            {LIST_ZINGCHART.map((item: Omit<ItemSongRatting, "createAt">) => {
              return <Item key={item.id} item={item} />;
            })}
            <button className="h-8 m-auto text-sm bg-transparent border border-white border-solid rounded-full hover:bg-white/10 w-28">
              Xem thêm
            </button>
          </ul>
          <div className="w-[50%] h-full">
            <Chart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-7 h-[107px] mt-[68px] mb-12">
        <div className="relative w-full h-full overflow-hidden rounded-md item">
          <ImageCustom
            src="http://avatar.nct.nixcdn.com/topic/mobile/2022/12/29/2/2/4/8/1672295146448.jpg"
            alt="img"
            className="scale"
          />
        </div>
        <div className="relative w-full h-full overflow-hidden rounded-md item">
          <ImageCustom
            src="http://avatar.nct.nixcdn.com/topic/mobile/2022/12/29/2/2/4/8/1672294981303.jpg"
            alt="img"
            className="scale"
          />
        </div>
        <div className="relative w-full h-full overflow-hidden rounded-md item">
          <ImageCustom
            src="http://avatar.nct.nixcdn.com/topic/mobile/2022/08/08/6/f/6/6/1659943944559.jpg"
            alt="img"
            className="scale"
          />
        </div>
      </div>
    </div>
  );
};

export default ZingChart;
