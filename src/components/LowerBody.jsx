import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Instruction from "./Instruction";
import Btn from "./Btn";

const LowerBody = () => {
  const [CurrPage, setCurrPage] = useState(false);
  const [GetValue, setGetValue] = useState(1);
  const { setGetDiceVal } = useContext(UserContext);

  // total score
  let { Counter, setCounter } = useContext(UserContext);
  const { SelectedNum, GetDiceVal } = useContext(UserContext);

  const generateRandomNum = () => {
    const getRandomNum = Math.floor(Math.random() * 6) + 1;
    setGetValue(getRandomNum);
    setGetDiceVal(getRandomNum);

    if (GetDiceVal === SelectedNum + 1) {
      setCounter((prevCounter) => prevCounter + getRandomNum);
    } else {
      setCounter((prevCounter) => prevCounter - 2);
    }
  };

  const resetHandler = () => {
    setCounter(0);
  };

  const handleClick = () => {
    setCurrPage(!CurrPage);
  };

  if (Counter <= -10) {
    alert("you loose");
    resetHandler();
  } else if (Counter >= 10) {
    alert("You win this phase!");
    resetHandler();
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[10%]">
      <img
        src={`./src/assets/dice_${GetValue}.png`}
        alt={`${GetValue}`}
        className="w-[200px]"
      />

      <button
        onClick={generateRandomNum}
        className="bg-black text-white rounded-md mt-5 capitalize py-1 font-bold w-[190px]"
      >
        roll dice
      </button>

      <button
        onClick={resetHandler}
        className="bg-slate-700 text-slate-100 border rounded-md w-[190px] mt-3 capitalize py-0 border-gray-700 font-bold"
      >
        reset game
      </button>

      {CurrPage ? <Instruction /> : <Btn handleClick={handleClick} />}
    </div>
  );
};
export default LowerBody;
