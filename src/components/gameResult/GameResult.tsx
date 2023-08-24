import "./GameResult.css";
import { useElementHouse } from "../../store/houseStore/HouseContext";
import { useElementUser } from "../../store/userStore/UserContext";

interface Props {
  result:string,
  setResult:React.Dispatch<string>
}
const GameResult = ({result,setResult}:Props) => {
  const { setHouseOption } = useElementHouse();
  const { setUserOption } = useElementUser();
  return (
    result.length > 0 ?
    <div className="game-element gap-20 result">
      <span className="result-text">{`you ${result}`}</span>
      <button
        onClick={() => {
          setUserOption({ area: "user", agent: "you" });
          setHouseOption({ agent: "the house", area: "house" });
          setResult('')
        }}
        className="game-button"
      >
        play again
      </button>
    </div>
    : <div></div>
  );
};

export default GameResult;
