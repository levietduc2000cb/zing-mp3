import http from "@/util/http";

export const getListSongRatting = () => {
  return http.get("listSongRatting");
};
