import Image from "next/image";
import React from "react";
import imgLoading from "../../../../assets/img/loading-gif.gif";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import { newRelease } from "@/models";

interface newMusicProp {
  newDataMusic: newRelease;
}

const NewMusic = ({ newDataMusic }: newMusicProp) => {
  const myLoader = () => {
    return newDataMusic.img as string;
  };

  return (
    <div className="relative flex w-full p-3 rounded hover:bg-purpleLight new-music">
      <div className="min-w-[60px] min-h-[60px] relative rounded overflow-hidden">
        <Image
          priority
          loader={myLoader}
          src={imgLoading}
          alt="img-music"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full cursor-pointer play">
          <FaPlay className="text-white" />
        </div>
      </div>
      <div className="ml-[10px] flex-1 max-w-[200px]">
        <h3 className="text-sm font-bold capitalize truncate">
          {newDataMusic.name}
        </h3>
        <div className="flex flex-shrink-0 my-1 text-xs font-bold text-gray-400 truncate">
          {newDataMusic.author?.map((author: String, index: Number) => {
            return (
              <div key={String(index)} className="inline-block">
                <span className="cursor-pointer hover:underline hover:text-purple-600">
                  {author}
                </span>
                {index !== newDataMusic.author.length - 1 && (
                  <span className="pr-1">,</span>
                )}
              </div>
            );
          })}
        </div>
        <p className="text-xs font-bold text-gray-400 truncate">
          {newDataMusic.createAt}
        </p>
      </div>
      <div className="absolute -translate-y-1/2 right-3 top-1/2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer other-btn">
          <BsThreeDots className="other-dot" />
        </div>
      </div>
    </div>
  );
};

export default NewMusic;
