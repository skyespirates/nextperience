"use client";
import useGames from "../../hooks/useGames";
import { Button } from "@/components/ui/button";
import GameCard from "@components/GameCard";


type GameType = {
  id: number;
  background_image: string;
  name: string;
  genres: { id: number; name: string }[];
  rating: number;
  released: string;
};

const games = () => {
  const { isLoading, error, data: games, fetchNextPage } = useGames();
  // const game = games.results[0];
  // console.log(game);

  // if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occured: {(error as any).message}</p>;

  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        {games?.pages.map((page) =>
          page.results.map((game: GameType) => (
            <GameCard key={game.id} game={game} isLoading={isLoading} />
          ))
        )}
      </div>
      {/* {data.results.map((game: { name: string }, i: number) => (
        <li key={i}>{game.name}</li>
      ))} */}
      <div className="my-4 text-center">
        <Button onClick={() => fetchNextPage()}>Load More</Button>
      </div>
    </div>
  );
};

export default games;
