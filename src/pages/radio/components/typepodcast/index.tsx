import ImageCustom from "@/components/imageCustom";
import React from "react";

const TypePodCast = () => {
  return (
    <div className="mt-12 text-white">
      <h2 className="pb-5 text-xl font-bold">Thể Loại Podcast</h2>
      <div className="grid grid-cols-5 grid-rows-1 gap-x-7">
        <div className="w-full h-[120px] overflow-hidden relative rounded-md">
          <ImageCustom
            src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/2/8/7/0/28700b2057fd36c92742b3015b263b7d.jpg"
            alt="img"
            className="duration-500 cursor-pointer hover:scale-110"
          />
        </div>
        <div className="w-full h-[120px] overflow-hidden relative rounded-md">
          <ImageCustom
            src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/f/6/5/af6588f6d58fbfbb68f4231441801c15.jpg"
            alt="img"
            className="duration-500 cursor-pointer hover:scale-110"
          />
        </div>
        <div className="w-full h-[120px] overflow-hidden relative rounded-md">
          <ImageCustom
            src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/8/6/7/1/8671a1447b5088d30c8dce06a3b2e24c.jpg"
            alt="img"
            className="duration-500 cursor-pointer hover:scale-110"
          />
        </div>
        <div className="w-full h-[120px] overflow-hidden relative rounded-md">
          <ImageCustom
            src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"
            alt="img"
            className="duration-500 cursor-pointer hover:scale-110"
          />
        </div>
        <div className="w-full h-[120px] overflow-hidden relative rounded-md">
          <ImageCustom
            src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/0/b/f/f/0bff0f141d91ac637556872d0008751f.jpg"
            alt="img"
            className="duration-500 cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default TypePodCast;
