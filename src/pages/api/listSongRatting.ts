// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ItemSongRatting } from "@/models";

const data: ItemSongRatting[] = [
  {
    id: 1,
    name: "Nếu Lúc Đó",
    author: ["Ngọc Thương Ruby"],
    rank: 1,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2023/02/27/2/9/a/2/1677482230509.jpg",
  },
  {
    id: 2,
    name: "Ưng Quá Chừng",
    author: ["Yang"],
    rank: 2,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2023/02/27/2/9/a/2/1677484137228.jpg",
  },
  {
    id: 3,
    name: "Ngủ Một Mình",
    author: ["Phan Mạnh Quỳnh"],
    rank: 3,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2022/12/12/2/8/0/d/1670833179694.jpg",
  },
  {
    id: 4,
    name: "Em Đồng Ý",
    author: ["Ngọc Thương Ruby"],
    rank: 4,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2023/02/08/f/b/7/8/1675840936117.jpg",
  },
  {
    id: 5,
    name: "Vì Anh Đâu Có Biết",
    author: ["Ngọc Thương Ruby"],
    rank: 5,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2022/08/05/5/b/8/a/1659665880915.jpg",
  },
  {
    id: 6,
    name: "Chuyện Đôi Ta",
    author: ["Ngọc Thương Ruby"],
    rank: 6,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2021/11/25/8/7/5/6/1637809824703.jpg",
  },
  {
    id: 7,
    name: "Yêu Anh Đi, Mẹ Anh Bán Bánh Mì",
    author: ["Ngọc Thương Ruby"],
    rank: 7,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2023/02/10/1/1/b/f/1676020047944.jpg",
  },
  {
    id: 8,
    name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
    author: ["Ngọc Thương Ruby"],
    rank: 8,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2022/12/28/a/4/7/d/1672214548521.jpg",
  },
  {
    id: 9,
    name: "Ánh Sao Và Bầu Trời",
    author: ["Ngọc Thương Ruby"],
    rank: 9,
    createAt: "04.01.2023",
    imgUrl:
      "http://avatar.nct.nixcdn.com/song/2021/09/09/f/c/f/d/1631155238247.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemSongRatting[]>
) {
  res.status(200).json(data);
}
