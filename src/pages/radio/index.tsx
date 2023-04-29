import ItemList2 from "@/components/itemList2";
import React from "react";
import Channel from "./components/channel";
import ItemList3 from "@/components/itemList3";
import useSWR from "swr";
import { getPodcast, getPodcastRatting } from "@/services/podcast";
import TypePodCast from "./components/typepodcast";
import PodcastRank from "./components/podcastRank";
import FamousProgram from "./components/famousProgram";

const fetcher = async () => {
  try {
    const data = await getPodcast();
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const fetcherRatting = async () => {
  try {
    const data = await getPodcastRatting();
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const Radio = () => {
  const { data: dataPodcast } = useSWR("/api/podcast", fetcher);
  const { data: dataPodcastRatting } = useSWR(
    "/api/podcast-ratting",
    fetcherRatting
  );

  return (
    <div>
      <h2 className="text-[40px] font-bold pb-8 pt-10 text-white">Radio</h2>
      <ItemList2 />
      <Channel />
      <ItemList3 title="Khám Phá Podcast" items={dataPodcast} />
      <TypePodCast />
      <PodcastRank
        title="Bảng Xếp Hạng Podcast"
        haveBG={true}
        haveRatting={true}
        items={dataPodcastRatting}
      />
      <PodcastRank title="Các Tập Nổi Bật" items={dataPodcastRatting} />
      <FamousProgram />
      <ItemList3
        title="Zing News"
        subTitle="PODCAST"
        imgTitle="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/5/0/d/c50d4d1a7b1feddf7c7421d5f059c3fa.jpg"
        items={dataPodcast}
      />
      <ItemList3
        title="Vietcetera"
        subTitle="PODCAST"
        imgTitle="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/c/5/b/dc5b49e6cb115ee1d3fa0bf749a2efd1.jpg"
        items={dataPodcast}
      />
      <ItemList3
        title="Pladio"
        subTitle="PODCAST"
        imgTitle="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg"
        items={dataPodcast}
      />
      <ItemList3
        title="On Air"
        subTitle="PODCAST"
        imgTitle="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg"
        items={dataPodcast}
      />
    </div>
  );
};

export default Radio;
