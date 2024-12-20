type Discount = {
  baseAmount: number;
  daysLeft: number;
};

export type Game = {
  title: string;
  description: string;
  releaseDate: Date;
  price: number;
  isMultiplayer: boolean;
};

export type MOBAGame = Game & {
  type: "moba";
  matchDuration: number;
  discount?: Discount;
};

export type FPSGame = Game & {
  type: "fps";
  crossPlatform: boolean;
  discount?: Discount;
};

export type RacingGame = Game & {
  type: "racing";
  controllerSupport: boolean;
  discount?: Discount;
};
