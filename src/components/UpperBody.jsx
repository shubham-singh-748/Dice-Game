import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const UpperBody = () => {
  const [BtnState, setBtnState] = useState(Array(6).fill(false));
  const [PrevBtn, setPrevBtns] = useState(null);
  const { setSelectedNum } = useContext(UserContext);

  let { Counter } = useContext(UserContext);

  const colorChange = (value) => {
    // creating new copy of "BtnState" array.
    const newBtnState = [...BtnState];

    // if "prevBtn" clicked previously, it means it can't be null, if it is null,it means it not clicked yet.
    if (PrevBtn !== null) {
      newBtnState[PrevBtn] = false;
    }

    // here "newBtnState" is an array and "[value]" is index.
    // so "newBtnState[value]" may be "3, 4, 5 or 1th index"
    newBtnState[value] = !newBtnState[value];

    // passing index value of an array item to update "prevBtn" state.
    setPrevBtns(value);

    // setBtnState updates with "newBtnState", it means if "newBtnState" has true value, then "setBtnState" updates with true value or updates with false value.
    setBtnState(newBtnState);

    // taking index value which is clicked by user.
    setSelectedNum(value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mt-10">
        <div className="flex flex-col items-center justify-between ">
          <p className="text-5xl font-bold">{Counter}</p>
          <p className="text-2xl font-bold">Total Score</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex ">
            {BtnState.map((eachArr, indexValue) => (
              <button
                key={indexValue}
                onClick={() => colorChange(indexValue)}
                className={`w-[45px] h-[45px] ml-5 border-gray-700 text-2xl font-bold font-serif text-center border ${
                  eachArr ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {indexValue + 1}
              </button>
            ))}
          </div>
          <p className="font-bold text-2xl mt-2">Select Number</p>
        </div>
      </div>
    </div>
  );
};
export default UpperBody;
