import "./ButtonRules.css";

interface Props {
  setIsOpenModal: React.Dispatch<boolean>;
}
const ButtonRole = ({ setIsOpenModal }: Props) => {
  return (
    <button onClick={() => setIsOpenModal(true)} className="btn-rules">
      rules
    </button>
  );
};

export default ButtonRole;
