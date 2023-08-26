import "./App.css";
import {useState} from 'react'
import Header from './layout/header/Header'
import Modal from "./components/modal/Modal";
import Main from "./layout/main/Main";
import ButtonRole from "./components/ButtonRules/ButtonRules";
import Original from "./layout/Original/Original";
import {useElementUser} from './store/userStore/UserContext'
import ButtonToggle from "./components/buttonToggle/ButtonToggle";
import Bonus from "./layout/bonus/Bonus";
import { useElementState } from "./store/stateStore/StateContext";

function App() {
 const [result,setResult] = useState('')
 const [isOpenModal,setIsOpenModal] = useState(false)
  const {userOption} = useElementUser()
  const {isBonus} = useElementState()
  return (
    <>
      <Header result = {result} />
      <ButtonToggle setResult={setResult}/>
      {userOption.value ? <Main result={result} setResult = {setResult}/> : isBonus ? <Bonus/> : <Original/>}
      <Modal isOpenModal = {isOpenModal} setIsOpenModal = {setIsOpenModal} isBonus={isBonus}/>
      <ButtonRole setIsOpenModal = {setIsOpenModal}/>
    </>
  );
}

export default App;
