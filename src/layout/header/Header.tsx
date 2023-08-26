import './Header.css'
import {useState,useEffect} from 'react'
import { useElementState } from '../../store/stateStore/StateContext'

interface Props {
    result:string,
}
const Header = ({result}:Props) => {
    const {isBonus} = useElementState()
    const [score,setScore] = useState(0)
    useEffect(() => {
        if(result == "win") setScore(score + 1)
    },[result])
    return (
        <div className='container-header'>
            <img className='container-header--img' src={isBonus ? "/assets/images/logo-bonus.svg" : "/assets/images/logo.svg"}/>
            <div className='container-score'>
                <h1 className='container-score--headline'>Score</h1>
                <span className='container-score--display'>{`${score}`}</span>
            </div>
        </div>
    );
};

export default Header;