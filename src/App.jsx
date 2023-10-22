import UserContextProvider from "./context/UserContextProvider";
import { useState } from "react";
import { GamePage, Landing } from "./Index";

const App = () => {
  const [IsGamePage, setIsGamePage] = useState(true);

  const handleClick = () => {
    setIsGamePage(!IsGamePage);
  };

  return (
    <UserContextProvider>
      {IsGamePage ? <Landing handleClick={handleClick} /> : <GamePage />}
    </UserContextProvider>
  );
};
export default App;
