import axios from "../instance";
import { useQuery } from "@tanstack/react-query";

const usePost = (postId: any) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: () => axios("/posts/" + postId).then((res) => res.data),
  });
};

export default usePost;
