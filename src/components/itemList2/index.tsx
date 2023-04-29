import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Item2 from "../item2";
import { Radio } from "@/models";

const RADIO_FAMOUS: Radio[] = [
  {
    id: 1,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/c/8/6/ec86b3d1bccfda952e39c2f31dd94435.jpg",
    listener: "1N",
  },
  {
    id: 2,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg",
    listener: "1N",
  },
  {
    id: 3,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/b/8/2/5b82aaa0580bd3917bfd8f2b07577e69.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg",
    listener: "1N",
  },
  {
    id: 4,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg",
    listener: "1N",
  },
  {
    id: 5,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/4/8/f/248fa7303200298d45568f120b99c41c.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg",
    listener: "1N",
  },
  {
    id: 6,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg",
    listener: "1N",
  },
  {
    id: 7,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg",
    listener: "1N",
  },
  {
    id: 8,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/0/1/9/3019766e48d2f1c060bfc71f12c61c5e.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/0/1/9/3019766e48d2f1c060bfc71f12c61c5e.jpg",
    listener: "1N",
  },
  {
    id: 9,
    name: "XONE Radio",
    imgAvatar:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/c/8/53c8e5053f0ec4b5a2bed26c37a27c73.jpg",
    imgTitle:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/c/8/53c8e5053f0ec4b5a2bed26c37a27c73.jpg",
    listener: "1N",
  },
];

const ItemList2 = () => {
  const handleClickRight = (): void => {
    const item2Wrapper = document.querySelector(".item2-wrapper");
    const item2List = document.querySelectorAll(".item2");
    item2Wrapper?.appendChild(item2List[0]);
  };

  const handleLeft = (): void => {
    const item2Wrapper = document.querySelector(".item2-wrapper");
    const item2List = document.querySelectorAll(".item2");
    item2Wrapper?.prepend(item2List[item2List.length - 1]);
  };

  return (
    <div className="py-10 text-white">
      <div className="flex items-center justify-between mb-7">
        <div className="text-xl font-bold">Radio Nổi Bật</div>
        <div className="flex items-center gap-1 text-xs font-medium text-gray-500 cursor-pointer hover:text-purple-600">
          TẤT CẢ
          <AiOutlineRight className="text-base" />
        </div>
      </div>
      <div className="relative w-full">
        <div className="w-full h-[214px] overflow-x-hidden max-w-[1167px] relative">
          <div className="absolute top-0 left-0 flex flex-shrink-0 w-full h-full transition-all item2-wrapper">
            {RADIO_FAMOUS.map((radio: Radio) => {
              return (
                <div className="absolute transition-all item2" key={radio.id}>
                  <Item2 radio={radio} />
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={handleLeft}
          className="absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/3 w-[38px] h-[38px] rounded-full bg-grayPrimary/30 flex items-center justify-center hover:bg-white hover:text-black"
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={handleClickRight}
          className="absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/3 w-[38px] h-[38px] rounded-full bg-grayPrimary/30 flex items-center justify-center hover:bg-white hover:text-black"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default ItemList2;
