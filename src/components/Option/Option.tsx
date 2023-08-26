import "./Option.css";
import { useElementUser } from "../../store/userStore/UserContext";
import {useElementHouse} from '../../store/houseStore/HouseContext';
import { dataOriginal } from "../../layout/Original/Original";
import { dataBonus } from "../../layout/bonus/Bonus";
import { useElementState } from "../../store/stateStore/StateContext";

interface Location {
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
}
interface Props {
  background: string;
  location: Location;
  img: string;
  value: string;
}
const Option = ({ location, background, img, value }: Props) => {
  const { userOption, setUserOption } = useElementUser();
  const { houseOption, setHouseOption } = useElementHouse();
  const {isBonus} = useElementState();
  return (
    <button
      onClick={() => {
        setUserOption({
          ...userOption,
          value: value,
          background: background,
          img: img,
        });
        const number = Math.floor(Math.random() * (isBonus ? dataBonus.length : dataOriginal.length));
        setHouseOption({
          ...houseOption,
          background: isBonus ? dataBonus[number].background : dataOriginal[number].background,
          img: isBonus ? dataBonus[number].img : dataOriginal[number].img,
          value:isBonus ? dataBonus[number].value : dataOriginal[number].value,
        });
      }}
      style={location}
      className="game-option"
    >
      <div className={`container-option ${background}`}>
        <div className="container-img">
          <img src={`${img}`} />
        </div>
      </div>
    </button>
  );
};

export default Option;
