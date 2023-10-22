import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [SelectedNum, setSelectedNum] = useState();
  const [GetDiceVal, setGetDiceVal] = useState();
  const [Counter, setCounter] = useState(0);
  const [IsBtnClicked, setIsBtnClicked] = useState(false);

  return (
    <UserContext.Provider
      value={{
        User,
        setUser,
        SelectedNum,
        setSelectedNum,
        GetDiceVal,
        setGetDiceVal,
        Counter,
        setCounter,
        IsBtnClicked,
        setIsBtnClicked,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
