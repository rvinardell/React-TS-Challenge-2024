import React from "react";
import { useFetchData } from "src/context/FetchData";

const Home: React.FC = () => {
  const { games } = useFetchData();

  return (
    <div className="min-h-screen bg-pageBg text-white">
      <h1 className="mb-10 text-4xl uppercase">Game store app</h1>
      Theres {games.length} games
    </div>
  );
};

export default Home;
