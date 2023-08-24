import "./App.css";
import {useState} from 'react'
import Header from './layout/header/Header'
import Modal from "./components/modal/Modal";
import Main from "./layout/main/Main";
import ButtonRole from "./components/ButtonRole/ButtonRole";
import Original from "./layout/Original/Original";
import {useElementUser} from './store/userStore/UserContext'


function App() {
 const [result,setResult] = useState('')
 const [isOpenModal,setIsOpenModal] = useState(false)
  const {userOption} = useElementUser()
  return (
    <>
      <Header result = {result}/>
      {userOption.value ? <Main result={result} setResult = {setResult}/> : <Original/>}
      <Modal isOpenModal = {isOpenModal} setIsOpenModal = {setIsOpenModal}/>
      <ButtonRole setIsOpenModal = {setIsOpenModal}/>
    </>
  );
}

export default App;
