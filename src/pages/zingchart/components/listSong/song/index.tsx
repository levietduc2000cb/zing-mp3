import ImageCustom from "@/components/imageCustom";
import React from "react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { ItemSongRatting } from "@/models";

export interface SongProp {
  songRatting: ItemSongRatting;
  heart?: boolean;
  subTitle?: boolean;
  small?: boolean;
}

const Song = ({
  songRatting,
  heart = true,
  subTitle = true,
  small,
}: SongProp) => {
  const textColorRank = (rank: number): string => {
    switch (rank) {
      case 1:
        return "strokeText6";
      case 2:
        return "strokeText5";
      case 3:
        return "strokeText4";
      case 4:
        return "strokeText3";
      default:
        return "strokeText2";
    }
  };

  return (
    <div className="px-[10px] pt-[10px]  h-auto hover:bg-[rgba(67,65,70,0.5)] rounded-lg text-gray-500 item">
      <div className="flex items-center border-b border-solid border-purpleLight pb-[10px]">
        {songRatting.rank === 1 && !small ? (
          <div className="w-[70px] h-8 flex justify-center items-center text-base">
            Gợi ý
          </div>
        ) : (
          <div
            className={`font-black text-[32px] w-[70px] h-8 flex justify-center items-center text-transparent ${textColorRank(
              songRatting.rank
            )}`}
          >
            {small ? songRatting.rank : songRatting.rank - 1}
          </div>
        )}
        <div className="w-4 h-[2px] bg-gray-400"></div>
        <div className="flex items-center w-full">
          <div className={`flex ${small ? "w-3/4" : "lg:w-1/2 w-3/4"}`}>
            <div className="relative w-10 h-10 overflow-hidden rounded mr-[10px] ml-[15px] flex-shrink-0">
              <ImageCustom src={songRatting.imgUrl} alt="image" />
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full duration-100 bg-black/50 appear hover:cursor-pointer">
                <BsFillPlayFill className="w-2/3 text-white h-2/3" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white capitalize truncate">
                {songRatting.name}
              </h3>
              <div className="text-xs truncate">
                {songRatting.author.map((a: string, index: number) => {
                  return (
                    <span
                      className="cursor-pointer hover:text-purple-600 hover:underline"
                      key={index}
                    >
                      {a}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {subTitle && (
            <div className="hidden w-1/4 text-sm lg:block">
              {songRatting.name} (Singer)
            </div>
          )}
          <div className="flex items-center justify-end w-1/4 pr-4 text-sm ">
            <span className="items-center justify-center flex-shrink-0 mr-2 text-lg text-white bg-transparent rounded-full display-flex hover:cursor-pointer hover:bg-gray-200/10 w-9 h-9">
              <GiMicrophone />
            </span>
            {heart && (
              <span className="items-center justify-center mr-2 text-lg text-white bg-transparent rounded-full display-flex hover:cursor-pointer hover:bg-gray-200/10 w-9 h-9">
                <AiOutlineHeart />
              </span>
            )}
            <span className="items-center justify-center flex-shrink-0 text-lg text-white bg-transparent rounded-full display-flex hover:cursor-pointer hover:bg-gray-200/10 w-9 h-9">
              <BsThreeDots />
            </span>
            <span className="display-hidden">{songRatting.createAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
