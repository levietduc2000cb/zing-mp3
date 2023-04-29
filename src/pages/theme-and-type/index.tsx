import ImageCustom from "@/components/imageCustom";
import React from "react";
import ItemListThemeAndType from "./components/itemListThemeAndType";
import MoodAndActivity from "./components/moodAndActivity";
import ItemList2 from "@/components/itemList2";
import ItemList from "../components/itemList";
import { Item } from "@/models";

export interface ItemTitle {
  id: number;
  name: string;
  imgUrl: string;
}

export interface MoodAndActivityType {
  id: number;
  title: string;
  imgTitle: string;
  subImgList: string[];
}

const PROMINENTS: ItemTitle[] = [
  {
    id: 1,
    name: "Nhạc Mới",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/2/a/f/a/2afa07fbcbabb1dfc7575c92731001be.jpg",
  },
  {
    id: 2,
    name: "Top 100",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/d/d/f/4/ddf4559b7a5d5a466ad8514fce6fc4eb.jpg",
  },
  {
    id: 3,
    name: "Chill/Thư Giãn",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/5/d/9/b/5d9b3a5de0e11982a0207c92b7ac4c5a.jpg",
  },
  {
    id: 4,
    name: "Artist's Story",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/a/c/9/e/ac9e073bbfbaadea7b1cb50bd047ece0.jpg",
  },
];

const COUNTRY: ItemTitle[] = [
  {
    id: 1,
    name: "Nhạc Việt",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/6/f/2/5/6f2568650c73bdb7095ae17fbe80bcef.jpg",
  },
  {
    id: 2,
    name: "Nhạc Âu Mỹ",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/0/3/5/7/0357e5b6e2db742ff549c9c9b475481b.jpg",
  },
  {
    id: 3,
    name: "Nhạc Hàn",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/4/a/6/3/4a6359638c40a8809908b173603008f6.jpg",
  },
  {
    id: 4,
    name: "Nhạc Hoa",
    imgUrl:
      "https://photo-zmp3.zmdcdn.me/cover/6/f/8/9/6f892731c369d17355fa5c6eabd3d118.jpg",
  },
];

const MOOD_AND_ACTIVITY: MoodAndActivityType[] = [
  {
    id: 1,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/8/5/d/1/85d1cfedf63d33e676e85071ab023f66.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/2/1/39219e7ff6c05ae1fd4fcd1219839b94.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/9/9/3/999323572b645323b080c41bbd0da4fd.jpg",
    ],
    title: "running",
  },
  {
    id: 2,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/1/c/c/8/1cc8ae9704ae8fb7e34487ce744083a9.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/5/b/b85be414ba667f9f4f7d032206e172ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/2/b/d/82bd1818a835d161f71c68da4ecc88f2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/7/e/b/37eb4a3ca3fd3151e494ec6ab9d9d045.jpg",
    ],
    title: "dinner",
  },
  {
    id: 3,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/3/b/c/0/3bc090f304669e0a01bc5cccdbc0715a.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/2/1/f/f21f484b734a87ac7ea7cb26778c8fe7.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/7/4/5/a745d23073791f45d120a8db418ac4ed.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/5/4/7/f547039d777138c2624fdc18b0a2823a.jpg",
    ],
    title: "tập trung",
  },
  {
    id: 4,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/e/6/8/0/e680570f74b3497c95d96f6ba6db7b07.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/f/d/a/afdace9245113658ff6de991fa1c6d1a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/7/9/0/479098299edb385e8d4a1c0706c79183.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/4/7/4/44746bc891fa96d83301a0ebe7178794.jpg",
    ],
    title: "giai điệu buồn",
  },
  {
    id: 5,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/3/b/c/0/3bc090f304669e0a01bc5cccdbc0715a.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/2/1/f/f21f484b734a87ac7ea7cb26778c8fe7.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/7/4/5/a745d23073791f45d120a8db418ac4ed.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/5/4/7/f547039d777138c2624fdc18b0a2823a.jpg",
    ],
    title: "tập trung",
  },
  {
    id: 6,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/8/5/d/1/85d1cfedf63d33e676e85071ab023f66.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
    ],
    title: "running",
  },
  {
    id: 7,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/1/c/c/8/1cc8ae9704ae8fb7e34487ce744083a9.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/5/b/b85be414ba667f9f4f7d032206e172ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/2/b/d/82bd1818a835d161f71c68da4ecc88f2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/7/e/b/37eb4a3ca3fd3151e494ec6ab9d9d045.jpg",
    ],
    title: "dinner",
  },
  {
    id: 8,
    imgTitle:
      "https://photo-zmp3.zmdcdn.me/cover/8/5/d/1/85d1cfedf63d33e676e85071ab023f66.jpg",
    subImgList: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/e/3/5ae37ad1f9c95708103157baa7bc4864.jpg",
    ],
    title: "running",
  },
];

const BOLERO: Item[] = [
  {
    id: 1,
    title: "Chẳng Còn Chúng Ta",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/e/d/23edcd39c5326c14e867e6715701ff67.jpg",
    author: ["Đông Đặng"],
  },
  {
    id: 2,
    title: "Ngày Nào Đó",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/0/9/7/8097bd408ac6a75ffa91afb75f890ca1.jpg",
    author: ["Vô Trọng Chí", "BMZ"],
  },
  {
    id: 3,
    title: "Mật Ngọt",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/c/c/3/ecc35e9c9b47f288200e2ff439a29c65.jpg",
    author: ["Dũng Hoàng Phạm"],
  },
  {
    id: 4,
    title: "Giờ Em Khóc Nước Mắt Ai Rơi",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/1/c/3/71c3367b678207953a80a392d24ac651.jpg",
    author: ["Thiên Tú"],
  },
  {
    id: 5,
    title: "Không Em Thì Ai",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/4/3/cd431179d75b94e04437e9c75546da20.jpg",
    author: ["Trung Quân"],
  },
];

const ThemeAndType = () => {
  return (
    <div>
      <div className="pt-5">
        <div className="relative w-full h-[342px]">
          <ImageCustom
            src="https://photo-zmp3.zmdcdn.me/cover/3/f/4/1/3f41f32d1ca9baeb2206137e5f2eab5c.jpg"
            alt="img-background"
            className="rounded"
          />
        </div>
      </div>
      <ItemListThemeAndType title="Nổi Bật" items={PROMINENTS} />
      <ItemListThemeAndType title="Quốc Gia" items={COUNTRY} />
      <MoodAndActivity items={MOOD_AND_ACTIVITY} />
      <ItemList title={"Trữ Tình & Bolero"} items={BOLERO} />
      <ItemList title={"EDM"} items={BOLERO} />
      <ItemList title={"Remix"} items={BOLERO} />
      <ItemList title={"Hip-Hop"} items={BOLERO} />
    </div>
  );
};

export default ThemeAndType;
