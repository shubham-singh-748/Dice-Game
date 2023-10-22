const Landing = ({ handleClick }) => {
  return (
    <div className="h-[100vh] flex items-center px-10">
      <div id="left_side">
        <img src="./src/assets/dices 1.png" alt="dices" />
      </div>

      <div id="right_side" className="flex flex-col items-end">
        <h1 className="text-8xl font-bold">DICE GAME</h1>
        <button
          onClick={handleClick}
          className="bg-black text-white rounded-md px-20 mt-2 py-2 hover:bg-white hover:text-black hover:border hover:border-gray-500 font-bold"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};
export default Landing;
