import React, { useEffect } from "react";
import Song from "./song";
import useSWR, { useSWRConfig } from "swr";
import { getListSongRatting } from "@/services/songRatting";
import { ItemSongRatting } from "@/models";

const fetcher = async () => {
  try {
    const data = await getListSongRatting();
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export interface ListSongProp {
  heart?: boolean;
  subTitle?: boolean;
  limitSong?: number | undefined;
  small?: boolean;
  btnTitle: string;
}

const ListSong = ({
  heart,
  subTitle,
  limitSong,
  small,
  btnTitle,
}: ListSongProp) => {
  const { data, error, isLoading } = useSWR("/api/song-ratting", fetcher);

  return (
    <div className="pb-14">
      {data?.slice(0, limitSong)?.map((song: ItemSongRatting) => {
        return (
          <Song
            songRatting={song}
            key={song.id}
            heart={heart}
            subTitle={subTitle}
            small={small}
          />
        );
      })}
      <div className="mt-5 text-center">
        <button className="py-2 text-sm font-medium text-white border border-white border-solid rounded-full px-7 hover:bg-purpleLight">
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default ListSong;
