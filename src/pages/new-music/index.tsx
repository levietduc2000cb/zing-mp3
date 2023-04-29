import { ItemSongRatting } from "@/models";
import ItemList from "../components/itemList";
import Song from "../zingchart/components/listSong/song";
import useSWR, { useSWRConfig } from "swr";
import { getListSongRatting } from "@/services/songRatting";
import { BsFillPlayCircleFill } from "react-icons/bs";

const fetcher = async () => {
  try {
    const data = await getListSongRatting();
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const NewMusic = () => {
  const { data, error, isLoading } = useSWR("/api/song-ratting", fetcher);
  return (
    <div>
      <div className="font-bold text-[40px] pb-8 pt-10 text-white flex items-center">
        BXH Nhạc Mới
        <BsFillPlayCircleFill className="mx-3 text-white cursor-pointer w-9 h-9 hover:text-white/90" />
      </div>
      {data?.map((song: ItemSongRatting) => {
        return <Song songRatting={song} key={song.id} />;
      })}
    </div>
  );
};

export default NewMusic;
