// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ItemPodCast } from "@/models";

const data: ItemPodCast[] = [
  {
    id: 1,
    title: "Đắp Chăn Nằm Nghe Tun Kể",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/6/d/7/f6d788fdf5d8ef5913ea2bc2e514a083.jpg",
  },
  {
    id: 2,
    title: "Đắp Chăn Nằm Nghe Tun Kể",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
  },
  {
    id: 3,
    title: "Nắng Thủy Tinh",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/1/d/0/d/1d0d3f88a0ab911690cc0a3e9c23fff0.jpg",
  },
  {
    id: 4,
    title: "HIEU TV",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/0/d/b/1/0db18352212495c489e270b229a79216.jpg",
  },
  {
    id: 5,
    title: "Tri Kỉ Cảm Xúc",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/3/e/5/b/3e5b595beba966297bdfe72debc7969d.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemPodCast[]>
) {
  res.status(200).json(data);
}
