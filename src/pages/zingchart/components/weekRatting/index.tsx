import React from "react";
import ListSong from "../listSong";
import { FaPlay } from "react-icons/fa";

const WeekRatting = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/img/back_ground_weekRatting.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="-mx-14"
    >
      <div className="bg-[rgba(32,19,53,0.9)] px-14 pt-10 pb-[30px]">
        <h2 className="font-extrabold text-[40px] text-white mb-[20px]">
          Bảng Xếp Hạng Tuần
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="bg-[rgba(64,59,73,0.26)] rounded-2xl">
            <div className="flex items-center ml-[50px] mb-3 mt-5">
              <h3 className="text-2xl font-bold hover:text-[#c273ed] text-white cursor-pointer">
                Việt Nam
              </h3>
              <div className="ml-2 w-7 h-7 rounded-full flex items-center justify-center bg-[rgb(194,115,237)] hover:bg-[rgb(186,83,241)] cursor-pointer">
                <FaPlay className="text-white w-[14px] h-[14px] ml-[2px]" />
              </div>
            </div>
            <ListSong
              heart={false}
              subTitle={false}
              limitSong={5}
              small={true}
              btnTitle="Xem tất cả"
            />
          </div>
          <div className="bg-[rgba(64,59,73,0.26)] rounded-2xl">
            <div className="flex items-center ml-[50px] mb-3 mt-5">
              <h3 className="text-2xl font-bold hover:text-[#c273ed] text-white cursor-pointer">
                US-UK
              </h3>
              <div className="ml-2 w-7 h-7 rounded-full flex items-center justify-center bg-[rgb(194,115,237)] hover:bg-[rgb(186,83,241)] cursor-pointer">
                <FaPlay className="text-white w-[14px] h-[14px] ml-[2px]" />
              </div>
            </div>
            <ListSong
              heart={false}
              subTitle={false}
              limitSong={5}
              small={true}
              btnTitle="Xem tất cả"
            />
          </div>
          <div className="bg-[rgba(64,59,73,0.26)] rounded-2xl">
            <div className="flex items-center ml-[50px] mb-3 mt-5">
              <h3 className="text-2xl font-bold hover:text-[#c273ed] text-white cursor-pointer">
                K-Pop
              </h3>
              <div className="ml-2 w-7 h-7 rounded-full flex items-center justify-center bg-[rgb(194,115,237)] hover:bg-[rgb(186,83,241)] cursor-pointer">
                <FaPlay className="text-white w-[14px] h-[14px] ml-[2px]" />
              </div>
            </div>
            <ListSong
              heart={false}
              subTitle={false}
              limitSong={5}
              small={true}
              btnTitle="Xem tất cả"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekRatting;
