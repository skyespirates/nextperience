import axios from "../instance";
import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => axios("/posts?_limit=10").then((res) => res.data),
  });
};

export default usePosts;
