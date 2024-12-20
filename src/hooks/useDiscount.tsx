import { MOBAGame, FPSGame, RacingGame } from "src/types";

type Game = MOBAGame | FPSGame | RacingGame;

export const useDiscount = (game: Game) => {
  let discount = 0;
  switch (game.type) {
    case "fps":
      if (game.discount) {
        discount = game.discount?.baseAmount;
      }
      break;
    case "moba":
      if (game.discount) {
        const { baseAmount, daysLeft } = game.discount;
        if (daysLeft <= 3) {
          const additionalDiscount = (3 - daysLeft) * 0.1 * baseAmount;
          discount = baseAmount + additionalDiscount;
        } else {
          discount = baseAmount;
        }
      }
      break;
    case "racing":
      if (game.discount) {
        if (!game.controllerSupport) {
          discount = game.discount?.baseAmount * 2;
        } else {
          discount = game.discount?.baseAmount;
        }
      }
      break;
  }
  if (discount === 0) {
    return null;
  }
  return discount <= 90 ? `${discount}%` : "90%";
};
