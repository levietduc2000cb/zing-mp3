import Item4 from "@/components/item4";
import { ItemPodCastRatting } from "@/models";
import React from "react";

export interface PodcastRankProp {
  title: string;
  haveBG?: boolean;
  haveRatting?: boolean;
  items: ItemPodCastRatting[];
}

const PodcastRank = ({
  title,
  haveBG,
  haveRatting,
  items,
}: PodcastRankProp) => {
  return (
    <div className="text-white">
      <h2 className="pt-12 pb-5 text-xl font-bold capitalize">{title}</h2>
      <div className="grid grid-cols-2 gap-x-7">
        <div className={`py-2 rounded-lg ${haveBG && "bg-gray-400/10"}`}>
          {items?.slice(0, 3)?.map((item: ItemPodCastRatting) => {
            return (
              <Item4 key={item.id} haveRatting={haveRatting} item={item} />
            );
          })}
        </div>
        <div className={`py-2 rounded-lg ${haveBG && "bg-gray-400/10"}`}>
          {items?.slice(3)?.map((item: ItemPodCastRatting) => {
            return (
              <Item4 key={item.id} haveRatting={haveRatting} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PodcastRank;
