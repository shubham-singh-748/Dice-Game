import { useState } from "react";
import Btn from "./Btn";

const Instruction = () => {
  const [CurrPage, setCurrPage] = useState(false);

  const handleClick = () => {
    setCurrPage(!CurrPage);
  };

  return (
    <>
      {CurrPage ? (
        <Btn />
      ) : (
        <div className="h-[10vh] flex items-center justify-center flex-col">
          <div className="flex items-start w-full">
            <button
              onClick={handleClick}
              className="bg-white text-black w-[290px] text-center border rounded-md mt-3 capitalize py-2 border-gray-700 font-bold hover:bg-black hover:text-white duration-700"
            >
              HIDE INSTRUCTION
            </button>
          </div>

          <h1 className="font-bold text-base font-poppins mt-[3%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            id cumque itaque nemo, debitis placeat! Sapiente quia placeat
            molestias praesentium non provident expedita et quod nostrum facilis
            odio, eligendi, porro nesciunt reiciendis. Cum ducimus velit libero.
            Dicta exercitationem ipsum, error temporibus libero quasi
            consectetur dolorem.
          </h1>
        </div>
      )}
    </>
  );
};
export default Instruction;
