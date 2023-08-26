import "./ButtonToggle.css";
import { useElementUser } from "../../store/userStore/UserContext";
import { useElementHouse } from "../../store/houseStore/HouseContext";
import React from "react";
import { useElementState } from "../../store/stateStore/StateContext";

interface Props {
  setResult:React.Dispatch<string>;
}
const ButtonToggle = ({setResult }: Props) => {
  const { setHouseOption } = useElementHouse();
  const { setUserOption } = useElementUser();
  const {isBonus,setIsBonus} = useElementState();
  return (
    <div className="container-toggle">
      <span className={`game-type ${isBonus ? "color-dark" : "color-white"}`}>
        original
      </span>
      <button
        onClick={() => {
          setIsBonus(!isBonus);
          setUserOption({ area: "user", agent: "you" });
          setHouseOption({ agent: "the house", area: "house" });
          setResult("");
        }}
        className="btn-toggle"
      >
        <button className={`circle-toggle ${isBonus ? "isBonus" : ""}`} />
      </button>
      <span className={`game-type ${isBonus ? "color-white" : "color-dark"}`}>
        bonus
      </span>
    </div>
  );
};

export default ButtonToggle;
