import { FC } from "react";
import { FetchDataProvider } from "src/context/FetchData";
import Home from "src/pages/Home";

const App: FC = () => {
  return (
    <FetchDataProvider>
      <Home />
    </FetchDataProvider>
  );
};

export default App;
