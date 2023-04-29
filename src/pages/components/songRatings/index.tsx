import { getListSongRatting } from "@/services/songRatting";
import React, { useRef, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useSWR from "swr";
import ItemSong from "./itemSong";
import { ItemSongRatting } from "@/models";

const SONG_RATTING_TOTAL = 3;

const fetcher = async () => {
  try {
    const data = await getListSongRatting();
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const SongRatings = () => {
  const { data, error, isLoading } = useSWR("/api/song-ratting", fetcher);

  const countSongRatting: React.MutableRefObject<number> = useRef(1);

  const handleClickRight = (): void => {
    const songSlide: HTMLElement | null =
      document.querySelector(".songratting-slide");
    const songList: HTMLElement | null =
      document.querySelector(".songrating-list");
    if (countSongRatting.current + 1 > SONG_RATTING_TOTAL) {
      songList?.style.setProperty("left", "0px");
      countSongRatting.current = 1;
    } else {
      songList?.style.setProperty(
        "left",
        `${
          (songList?.offsetLeft as any) - (songSlide?.clientWidth as any) - 27
        }px`
      );
      countSongRatting.current += 1;
    }
  };

  const handleClickLeft = (): void => {
    const songSlide: HTMLElement | null =
      document.querySelector(".songratting-slide");
    const songList: HTMLElement | null =
      document.querySelector(".songrating-list");
    if (countSongRatting.current - 1 < 1) {
      songList?.style.setProperty(
        "left",
        `-${(songSlide?.clientWidth as any) * (SONG_RATTING_TOTAL - 1) + 54}px`
      );
      countSongRatting.current = SONG_RATTING_TOTAL;
    } else {
      countSongRatting.current -= 1;
      songList?.style.setProperty(
        "left",
        `${
          (songList?.offsetLeft as any) + (songSlide?.clientWidth as any) + 27
        }px`
      );
    }
  };

  useEffect(() => {
    const timeInterVal = setInterval(() => {
      handleClickRight();
    }, 2000);
    return () => {
      clearInterval(timeInterVal);
    };
  }, []);

  return (
    <div className="py-10 text-white">
      <div className="flex items-center mb-7">
        <div className="text-xl font-bold">Bảng Xếp Hạng Nhạc Mới</div>
      </div>
      <div className="relative w-full h-[150px]">
        <div className="relative w-full h-full overflow-hidden songratting-slide">
          <div className="absolute top-0 flex w-full h-full duration-500 gap-x-[27px] songrating-list">
            {data?.map((song: ItemSongRatting) => {
              return <ItemSong key={song.id} itemSong={song} />;
            })}
          </div>
        </div>
        <button
          onClick={handleClickLeft}
          className="absolute left-0 flex items-center justify-center w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 bg-grayPrimary/30"
        >
          <BiChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={handleClickRight}
          className="absolute right-0 flex items-center justify-center w-10 h-10 translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 bg-grayPrimary/30"
        >
          <BiChevronRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SongRatings;
