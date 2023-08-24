import "./GameElement.css";
interface Props {
  agent?:string,
  background?:string,
  isWin?:boolean,
  img?:string,
  area:string
}
const GameElement = ({agent,background,isWin,img,area}:Props) => {
  
  return (
    <div className={`game-element gap-32 reverse ${area}`}>
      <span className="game-text">{agent ? `${agent} picked` : ''}</span>
      <div className={`container-circle ${background}  ${isWin ? 'game-win' : ''}`}>
        <div className="container-img">
          <img src={`${img}`} />
        </div>
      </div>
    </div>
  );
};

export default GameElement;
