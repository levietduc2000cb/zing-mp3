import React from "react";
import useSWR from "swr";

import NewMusic from "./newMusic";
import { getNewReleased } from "@/services/newlyReleasedService";
import { NewRelease } from "@/models";

const fetcher = async () => {
  try {
    const data = await getNewReleased();
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const NewReleased = () => {
  const { data, error, isLoading } = useSWR("/api/newlyreleased", fetcher);

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold">Mới Phát Hành</h2>
      <ul className="flex gap-4 mt-5 mb-4 text-xs">
        <li className="px-6 py-1 border border-transparent border-solid rounded-full cursor-default bg-purple">
          TẤT CẢ
        </li>
        <li className="px-6 py-1 border border-solid rounded-full cursor-pointer border-purpleLight">
          VIỆT NAM
        </li>
        <li className="px-6 py-1 border border-solid rounded-full cursor-pointer border-purpleLight">
          QUỐC TẾ
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7">
        {data?.map((newData: NewRelease) => {
          return <NewMusic newDataMusic={newData} key={String(newData.id)} />;
        })}
      </div>
    </div>
  );
};

export default NewReleased;
