import axios from "../instance";
import { useInfiniteQuery } from "@tanstack/react-query";

// import sleep from "./sleep";

const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) => {
      return axios(`/posts?_page=${pageParam}&_limit=10`).then(
        (res) => res.data
      );
    },
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < 10) return allPages.length + 1;
      return undefined;
    },
  });
};

export default usePosts;
