// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ItemPodCastRatting } from "@/models";

const data: ItemPodCastRatting[] = [
  {
    id: 1,
    title: "Làm thế nào để tình yêu bền vững, Đắp chăn lắng nghe Tun",
    subTitle: "Đắp chăn nằm nghe Tun kể",
    createAt: "23/04/2023",
    minute: "27 phút",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/0/2/1/a/021afbe1bfe812799b496b44d9eb72a5.jpg",
    rank: 1,
  },
  {
    id: 2,
    title: "Làm thế nào để tình yêu bền vững, Đắp chăn lắng nghe Tun",
    subTitle: "Đắp chăn nằm nghe Tun kể",
    createAt: "23/04/2023",
    minute: "27 phút",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/5/6/c/c/56cce669fa6f86e764fb2d600142f107.jpg",
    rank: 2,
  },
  {
    id: 3,
    title: "Làm thế nào để tình yêu bền vững, Đắp chăn lắng nghe Tun",
    subTitle: "Đắp chăn nằm nghe Tun kể",
    createAt: "23/04/2023",
    minute: "27 phút",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/5/8/b/f/58bf0e8bfa600533955e348e3e8033ec.jpg",
    rank: 3,
  },
  {
    id: 4,
    title: "Làm thế nào để tình yêu bền vững, Đắp chăn lắng nghe Tun",
    subTitle: "Đắp chăn nằm nghe Tun kể",
    createAt: "23/04/2023",
    minute: "27 phút",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/0/2/1/a/021afbe1bfe812799b496b44d9eb72a5.jpg",
    rank: 4,
  },
  {
    id: 5,
    title: "Làm thế nào để tình yêu bền vững, Đắp chăn lắng nghe Tun",
    subTitle: "Đắp chăn nằm nghe Tun kể",
    createAt: "23/04/2023",
    minute: "27 phút",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/5/8/b/f/58bf0e8bfa600533955e348e3e8033ec.jpg",
    rank: 5,
  },
  {
    id: 6,
    title: "Làm thế nào để tình yêu bền vững, Đắp chăn lắng nghe Tun",
    subTitle: "Đắp chăn nằm nghe Tun kể",
    createAt: "23/04/2023",
    minute: "27 phút",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/5/6/c/c/56cce669fa6f86e764fb2d600142f107.jpg",
    rank: 6,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemPodCastRatting[]>
) {
  res.status(200).json(data);
}
