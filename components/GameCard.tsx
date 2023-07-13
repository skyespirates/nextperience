import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {DummyImage} from 'react-simple-placeholder-image'

// import { FaStar } from "react-icons/fa6";
type GameType = {
  id: number;
  background_image: string;
  name: string;
  genres: { id: number; name: string }[];
  rating: number;
  released: string;
};

type GameProps = {
  game: GameType;
  isLoading: boolean
};

const GameCard = ({ game, isLoading }: GameProps) => {
  return (
    <Card className="w-[240px] h-[300px] overflow-hidden">
      <CardHeader className="p-0 h-[60%] relative ">
        <Image  fill src={game.background_image} alt={game.name} sizes="100%" placeholder="blur" blurDataURL="/placeholder.jpg" />
        
      </CardHeader>
      <CardContent className="flex flex-col p-4 gap-y-4">
        <h3 className="text-base font-semibold truncate">{game.name}</h3>
        <div>
          <p className="flex justify-between text-xs">
            <span className="font-semibold">Release date:</span>
            <span>{game.released}</span>
          </p>
          <p className="flex justify-between text-xs">
            <span className="font-semibold">Genres:</span>
            <span className="truncate">
              {game.genres.map((genre, i) => {
                if (game.genres.length === i + 1) {
                  return <span key={genre.id}>{genre.name}</span>;
                }
                return <span key={genre.id}>{genre.name}, </span>;
              })}
            </span>
          </p>
          <p className="flex justify-between text-xs">
            <span className="font-semibold">Rating: </span>
            <span>{game.rating}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
