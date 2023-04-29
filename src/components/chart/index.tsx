import React from "react";

const Chart = () => {
  return (
    <div className="relative w-full border-b-2 border-l-2 border-solid border-black/25 h-80">
      <div className="absolute flex justify-between w-full top-[calc(100%+4px)] text-sm text-gray-300">
        <span>00:00</span>
        <span>01:00</span>
        <span>02:00</span>
        <span>03:00</span>
        <span>04:00</span>
        <span>05:00</span>
        <span>06:00</span>
        <span>07:00</span>
        <span>08:00</span>
      </div>
    </div>
  );
};

export default Chart;
