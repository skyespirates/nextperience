import axios from "../instance";
import { useQuery } from "@tanstack/react-query";

import sleep from "./sleep";

const usePost = (postId: any) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: async () => {
      await sleep(2000);
      return axios("/posts/" + postId).then((res) => res.data);
    },
  });
};

export default usePost;
