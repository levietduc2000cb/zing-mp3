// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NewRelease } from "@/models";

const data: NewRelease[] = [
  {
    id: 1,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 2,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 3,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 4,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân", "Đinh Nhi"],
    createAt: "Hôm qua",
  },
  {
    id: 5,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân", "Thái Hoàng"],
    createAt: "Hôm qua",
  },
  {
    id: 6,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân", "David Đại"],
    createAt: "Hôm qua",
  },
  {
    id: 7,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 8,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 9,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 10,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 11,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân"],
    createAt: "Hôm qua",
  },
  {
    id: 12,
    name: "đưa em về nhà",
    img: "https://i.pinimg.com/736x/da/92/68/da9268903ac48f8031486f5dde499f06.jpg",
    author: ["Phạm Đình Thái Ngân", "Duy Nguyễn"],
    createAt: "Hôm qua",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewRelease[]>
) {
  res.status(200).json(data);
}
