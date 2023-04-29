import Chart from "@/components/chart";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ListSong from "./components/listSong";
import WeekRatting from "./components/weekRatting";

const ZingChart = () => {
  return (
    <div>
      <div className="flex items-center pt-10 pb-12">
        <h2 className="text-4xl font-bold text-gradient color-gradient">
          #zingchart
        </h2>
        <BsFillPlayCircleFill className="mx-3 text-white cursor-pointer w-9 h-9 hover:text-white/90" />
      </div>
      <div className="max-h-[300px] p-3 mb-16">
        <Chart />
      </div>
      <ListSong btnTitle="Xem top 100" />
      <WeekRatting />
    </div>
  );
};

export default ZingChart;
