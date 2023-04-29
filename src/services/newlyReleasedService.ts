import http from "@/util/http";

export const getNewReleased = () => {
  return http.get("newlyreleased");
};
