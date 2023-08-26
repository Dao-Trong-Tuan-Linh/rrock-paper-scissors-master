import "./Main.css";
import { useEffect} from "react";
import GameElement from "../../components/gameElement/GameElement";
import GameResult from "../../components/gameResult/GameResult";
import WaitingElement from "../../components/WaitingElement/WaitingElement";
import { useElementUser } from "../../store/userStore/UserContext";
import { useElementHouse } from "../../store/houseStore/HouseContext";

interface Props {
  result:string,
  setResult:React.Dispatch<string>
}
const Main = ({result,setResult}:Props) => {
  const { userOption } = useElementUser();
  const { houseOption } = useElementHouse();
 
  function gameResult(userValue?:string,houseValue?:string) {
    if (
      (userValue === "rock" && houseValue === "scissors") ||
      (userValue === "rock" && houseValue === "lizard") ||
      (userValue === "scissors" && houseValue === "paper") ||
      (userValue === "scissors" && houseValue === "lizard") ||
      (userValue === "paper" && houseValue === "rock") ||
      (userValue === "paper" && houseValue === "spock") ||
      (userValue === "lizard" && houseValue === "spock") ||
      (userValue === "lizard" && houseValue === "paper") ||
      (userValue === "spock" && houseValue === "scissors") ||
      (userValue === "spock" && houseValue === "rock") 
    )  return "win"
    if(userValue === houseValue) return "draw"
    return "lose"
  }
  useEffect(() => {
    setTimeout(() => {
      const resultGame = gameResult(userOption.value,houseOption.value)
      console.log(userOption.value,houseOption.value,resultGame)
      setResult(resultGame)
    }, 1200);
    
  }, []);
  
  return (
    <div className="main">
      <GameElement
        agent={userOption.agent}
        background={userOption.background}
        isWin={result == "win" ? true : false}
        img={userOption.img}
        area={userOption.area}
      />
      <GameResult
      result={result}
      setResult={setResult}
      />
      {result ? (
        <GameElement
          agent={houseOption.agent}
          background={houseOption.background}
          img={houseOption.img}
          area={houseOption.area}
          isWin = {result == "lose" ? true : false}
        />
      ) : (
        <WaitingElement />
      )}
    </div>
  );
};

export default Main;
