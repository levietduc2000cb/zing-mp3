import http from "@/util/http";

export const getPodcast = () => {
  return http.get("podcast");
};

export const getPodcastRatting = () => {
  return http.get("podcastRatting");
};
