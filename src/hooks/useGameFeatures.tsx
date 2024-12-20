import { MOBAGame, FPSGame, RacingGame } from "src/types";
import { capitalizeFirstLetter } from "src/utils/CapitalizeFirstLetter";

type Game = MOBAGame | FPSGame | RacingGame;

export const useGameFeatures = (game: Game) => {
  switch (game.type) {
    case "moba":
      return {
        matchDuration: "matchDuration" in game ? game.matchDuration : null,
        gameType: game.type?.toUpperCase(),
      };
    case "fps":
      return {
        isCrossPlatform:
          "crossPlatform" in game && game.crossPlatform
            ? "Cross-Platform"
            : "PC-only",
        gameType: `${game.type?.toUpperCase()} Shooter`,
      };
    case "racing":
      return {
        hasControllerSupport:
          "controllerSupport" in game ? "Controller Supported" : null,
        gameType: `Car ${capitalizeFirstLetter(game.type ?? "")}`,
      };
  }
};
