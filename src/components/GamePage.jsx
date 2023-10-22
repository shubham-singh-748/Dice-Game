import LowerBody from "./LowerBody";
import UpperBody from "./UpperBody";

const GamePage = () => {
  return (
    <div className="flex flex-col h-[100vh] px-14">
      <UpperBody />
      <LowerBody />
    </div>
  );
};
export default GamePage;
