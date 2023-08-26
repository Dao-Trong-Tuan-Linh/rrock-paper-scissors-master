import React from 'react';
import "./Bonus.css"
import Option from '../../components/Option/Option';
import bonus from '../../bonus.json'

export const dataBonus = [
    {
        value:bonus[0].value,
        img:bonus[0].img,
        background:'background-paper',
        location:{top:'0',right:'0'}
    },
    {
        value:bonus[1].value,
        img:bonus[1].img,
        background:'background-scissors',
        location:{top:'-45%',left:'35%'}
    },
    {
        value:bonus[2].value,
        img:bonus[2].img,
        background:'background-rock',
        location:{bottom:'-40%',right:'15%'}
    },
    {
        value:bonus[3].value,
        img:bonus[3].img,
        background:'background-lizard',
        location:{bottom:'-40%',left:'15%'}
    },
    {
        value:bonus[4].value,
        img:bonus[4].img,
        background:'background-spock',
        location:{top:'0%',left:'0%'}
    }
]

const Bonus = () => {
    return (
        <div className='bonus'>
            {dataBonus.map((item,index) => (
                <Option key={index} value={item.value} location={item.location} background={item.background} img={item.img}/>
            ))}
        </div>
    );
};

export default Bonus;