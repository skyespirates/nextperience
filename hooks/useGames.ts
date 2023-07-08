import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const useGames = () => {
  return useInfiniteQuery({
    queryKey: ["games"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(
          `https://api.rawg.io/api/games?page=${pageParam}&key=47fbf08610484225a6b29c7c76dec737`
        )
        .then((res) => res.data),
    getNextPageParam: (lastPage) => {
      if (lastPage.next) return lastPage.next.split("page=")[1];
      if (lastPage.next) return lastPage.next;
      return undefined;
    },
  });
};

export default useGames;
