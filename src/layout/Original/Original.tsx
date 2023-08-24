import './Original.css'
import Option from '../../components/Option/Option';
import original from '../../original.json'

export const dataOriginal = [
    {
        value:original[0].value,
        img:original[0].img,
        background:'background-paper',
        location:{top:'-30%',left:'0'}
    },
    {
        value:original[1].value,
        img:original[1].img,
        background:'background-scissors',
        location:{top:'-30%',right:'0'}
    },
    {
        value:original[2].value,
        img:original[2].img,
        background:'background-rock',
        location:{bottom:'-40%',left:'30%'}
    }
]
const Original = () => {
    return (
        <div className='original'>
            {dataOriginal.map((item,index) => (
                <Option key={index} value={item.value} location={item.location} background={item.background} img={item.img}/>
            ))}
        </div>
    );
};

export default Original;