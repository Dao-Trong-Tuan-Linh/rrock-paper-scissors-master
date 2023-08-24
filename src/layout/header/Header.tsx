import './Header.css'
import {useState,useEffect} from 'react'
interface Props {
    result:string
}
const Header = ({result}:Props) => {
    const [score,setScore] = useState(0)
    useEffect(() => {
        if(result == "win") setScore(score + 1)
    },[result])
    return (
        <div className='container-header'>
            <img src="/assets/images/logo.svg"/>
            <div className='container-score'>
                <h1 className='container-score--headline'>Score</h1>
                <span className='container-score--display'>{`${score}`}</span>
            </div>
        </div>
    );
};

export default Header;