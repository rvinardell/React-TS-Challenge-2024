import React from "react";
import { useFetchData } from "src/context/FetchData";
import GameCardComponent from "src/components/gamecard/GameCardComponent";

const Home: React.FC = () => {
  const { games } = useFetchData();

  return (
    <div className="min-h-screen bg-pageBg text-white">
      <h1 className="py-10 text-center text-4xl uppercase">Game store app</h1>
      <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCardComponent key={game.title} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
