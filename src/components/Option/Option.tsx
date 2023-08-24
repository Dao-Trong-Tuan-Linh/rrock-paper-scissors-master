import "./Option.css";
import { useElementUser } from "../../store/userStore/UserContext";
import {useElementHouse} from '../../store/houseStore/HouseContext';
import { dataOriginal } from "../../layout/Original/Original";

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
  return (
    <button
      onClick={() => {
        setUserOption({
          ...userOption,
          value: value,
          background: background,
          img: img,
        });
        const number = Math.floor(Math.random() * (dataOriginal.length));
        setHouseOption({
          ...houseOption,
          background: dataOriginal[number].background,
          img: dataOriginal[number].img,
          value: dataOriginal[number].value,
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
