import ImageCustom from "@/components/imageCustom";
import { ItemSongRatting } from "@/models";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

export interface ItemSongProp {
  itemSong: ItemSongRatting;
}

const ItemSong = ({ itemSong }: ItemSongProp) => {
  return (
    <div className="flex flex-shrink-0 w-[calc((100%-54px)/3)] h-full p-4 bg-purpleLight rounded-md cursor-pointer item-song-rating">
      <div className="relative w-1/3 h-full overflow-hidden img-wrapper">
        <ImageCustom
          src={itemSong.imgUrl}
          alt="music-top"
          className="rounded-md"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all bg-black/40 play">
          <BsPlayCircle className="w-11 h-11" />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 ml-[10px]">
        <div className="w-full">
          <h3 className="text-base font-bold">{itemSong.name}</h3>
          <p className="text-sm text-[#75707c] hover:underline hover:text-purple-600">
            {itemSong?.author.map((a, index) => {
              return <span key={index}>{a}</span>;
            })}
          </p>
        </div>
        <div className="flex items-end justify-between w-full">
          <h3 className="text-5xl font-black text-transparent strokeText2">
            {`#${itemSong.rank}`}
          </h3>
          <p className="text-[#75707c] font-medium">{itemSong.createAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSong;
