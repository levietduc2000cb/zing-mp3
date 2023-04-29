import ImageCustom from "@/components/imageCustom";
import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Channel = () => {
  const [btnLeftDisappear, setBtnLeftDisappear] = useState<boolean>(true);
  const [btnRightDisappear, setBtnRightDisappear] = useState<boolean>(false);

  const handleClickLeft = () => {
    let row1: Element | null = document.querySelector(".row-chanle-1");
    const rowChannelWrapper: HTMLElement | null = document.querySelector(
      ".row-channel-wrapper"
    );
    let withRow: number = row1?.clientWidth as number;

    let widthRow: number = rowChannelWrapper?.clientWidth as number;
    let leftRow: number = rowChannelWrapper?.offsetLeft as number;
    if (leftRow === 0) {
      return;
    } else {
      rowChannelWrapper?.style.setProperty("left", `${leftRow + widthRow}px`);
      if (leftRow + widthRow === 0) {
        setBtnLeftDisappear(true);
        return;
      }
      setBtnRightDisappear(false);
    }
  };

  const handleClickRight = () => {
    let row1: Element | null = document.querySelector(".row-chanle-1");
    const rowChannelWrapper: HTMLElement | null = document.querySelector(
      ".row-channel-wrapper"
    );
    let withRow: number = row1?.clientWidth as number;

    let widthRow: number = rowChannelWrapper?.clientWidth as number;
    let leftRow: number = rowChannelWrapper?.offsetLeft as number;
    if (Math.abs(leftRow) > widthRow) {
      return;
    } else {
      rowChannelWrapper?.style.setProperty("left", `${leftRow - widthRow}px`);
      if (Math.abs(leftRow - widthRow) > withRow) {
        setBtnRightDisappear(true);
        return;
      }
      setBtnLeftDisappear(false);
    }
  };

  return (
    <div className="flex items-end overflow-hidden gap-x-2">
      <div>
        <h4 className="mb-2 text-center text-white">Kênh</h4>
        <div className="py-[10px] px-6 h-[258px] bg-lightPurple flex flex-col justify-between rounded-l-md">
          <div className="w-[60px] h-[60px] rounded-full relative overflow-hidden item">
            <ImageCustom
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg"
              alt="img"
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full cursor-pointer bg-black/50 appear">
              <BsPlayCircle className="w-2/3 text-white h-2/3" />
            </div>
          </div>
          <div className="w-[60px] h-[60px] rounded-full relative overflow-hidden item">
            <ImageCustom
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg"
              alt="img"
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full cursor-pointer bg-black/50 appear">
              <BsPlayCircle className="w-2/3 text-white h-2/3" />
            </div>
          </div>
          <div className="w-[60px] h-[60px] rounded-full relative overflow-hidden item">
            <ImageCustom
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg"
              alt="img"
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full cursor-pointer bg-black/50 appear">
              <BsPlayCircle className="w-2/3 text-white h-2/3" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[258px] relative flex-1 overflow-hidden">
        <div className="absolute top-0 left-0 grid w-full h-full grid-cols-1 grid-rows-3 duration-500 gap-y-2 row-channel-wrapper">
          <div className="flex gap-x-2 row-chanle-1">
            <div className="flex-shrink-0 w-1/2 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-1/2 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-1/2 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 row-chanle-2">
            <div className="flex-shrink-0 w-1/6 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-1/2 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-2/5 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 row-chanle-3">
            <div className="flex-shrink-0 w-full bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-1/2 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
            <div className="flex-shrink-0 w-2/3 bg-lightPurple p-[10px] rounded flex">
              <div className="relative flex-shrink-0 w-16 h-16 mr-2 overflow-hidden rounded">
                <ImageCustom
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/1/3/4/e1345631cd8385c0b555f9a8db2bdfdd.jpg"
                  alt="img"
                />
              </div>
              <div className="text-xs">
                <div className="mb-[6px] text-white font-semibold hover:text-purple-600 cursor-pointer overflow-hidden break-normal">
                  ASIAN IDIEN TOWN
                </div>
                <div className="text-gray-300/70">18:00 - 21:00</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[10%] absolute h-full bg-gradient-to-r from-[#170f23] to-transparent top-0 left-0 flex items-center justify-center ${
            btnLeftDisappear ? "hidden" : "block"
          }`}
        >
          <button
            onClick={handleClickLeft}
            className="flex items-center justify-center text-white rounded-full bg-grayPrimary/30 w-14 h-14"
          >
            <AiOutlineLeft className="w-1/2 cursor-pointer text-white/75 h-1/2" />
          </button>
        </div>
        <div
          className={`w-[10%] absolute h-full bg-gradient-to-l from-[#170f23] to-transparent top-0 right-0 flex items-center justify-center ${
            btnRightDisappear ? "hidden" : "block"
          }`}
        >
          <button
            onClick={handleClickRight}
            className="flex items-center justify-center text-white rounded-full bg-grayPrimary/30 w-14 h-14"
          >
            <AiOutlineRight className="w-1/2 cursor-pointer text-white/75 h-1/2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Channel;
