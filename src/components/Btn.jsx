const Btn = ({ handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-white text-black border rounded-md w-[190px] mt-3 capitalize py-0 border-gray-700 font-bold"
      >
        how to play
      </button>
    </div>
  );
};
export default Btn;
