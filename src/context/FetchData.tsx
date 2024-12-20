import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { mockGames } from "src/mockData";
import { MOBAGame, FPSGame, RacingGame } from "src/types";

type FetchDataContextValue = {
  fetchData: () => void;
  games: Array<FPSGame | MOBAGame | RacingGame>;
};

type FetchDataContextProviderProps = {
  children: ReactNode;
};

const FetchDataContext = createContext<FetchDataContextValue | null>(null);

export const FetchDataProvider: React.FC<FetchDataContextProviderProps> = ({
  children,
}: FetchDataContextProviderProps) => {
  const [games, setGames] = useState<Array<FPSGame | MOBAGame | RacingGame>>(
    [],
  );

  const fetchData = () => {
    setGames(mockGames);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FetchDataContext.Provider value={{ fetchData, games }}>
      {children}
    </FetchDataContext.Provider>
  );
};

export const useFetchData: () => FetchDataContextValue = () => {
  const fetchDataContext = useContext(FetchDataContext);
  if (!fetchDataContext) {
    throw new Error("useFetchData must be used within a FetchDataProvider");
  }
  return fetchDataContext;
};
