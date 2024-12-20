import React from "react";
import { MOBAGame, FPSGame, RacingGame } from "src/types";
import { useGameFeatures } from "src/hooks/useGameFeatures";
import { useDiscount } from "src/hooks/useDiscount";
import CustomTag from "src/components/customTag/CustomTag";

type GameCardProps = {
  game: MOBAGame | FPSGame | RacingGame;
};

const GameCardComponent: React.FC<GameCardProps> = ({ game }) => {
  const { hasControllerSupport, isCrossPlatform, matchDuration, gameType } =
    useGameFeatures(game);
  const discount = useDiscount(game);
  return (
    <div className="grid bg-cardBg p-5">
      <h2 className="text-lg">{game.title}</h2>
      <p className="text-lg">{game.description}</p>
      <p className="text-lg">$ {game.price}</p>
      {discount && <p className="text-lg">DISCOUNT {discount} !!!</p>}
      <p className="text-lg">{gameType}</p>
      <p className="text-lg">
        Release date: {game.releaseDate?.toLocaleDateString()}
      </p>

      <CustomTag text="Multiplayer" visible={game.isMultiplayer} />
      <div className="pt-10">
        <p>GENRE: {game?.type?.toUpperCase()}</p>
        {hasControllerSupport && <CustomTag text={hasControllerSupport} />}
        {isCrossPlatform && <CustomTag text={isCrossPlatform} />}
        {matchDuration && (
          <CustomTag text={`Average match duration: ${matchDuration} min`} />
        )}
      </div>
    </div>
  );
};

export default GameCardComponent;
