export interface NewRelease {
  id: number;
  name: string;
  img: string;
  author: string[];
  createAt: string;
}

export interface Item {
  id: number;
  name?: string;
  imgUrl: string;
  title?: string;
  author?: string[];
}

export interface ItemSongRatting {
  id: number;
  name: string;
  author: string[];
  rank: number;
  createAt: string;
  imgUrl: string;
}

export interface Radio {
  id: number;
  name: string;
  imgTitle: string;
  imgAvatar: string;
  listener: string;
}

export interface ItemPodCast {
  id: number;
  title: string;
  imgUrl: string;
}

export interface ItemPodCastRatting {
  id: number;
  title: string;
  subTitle?: string;
  imgUrl: string;
  createAt: string;
  minute: string;
  rank: number;
}
