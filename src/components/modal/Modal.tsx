import './Modal.css'
import {useRef,useEffect} from 'react'
interface Props {
    isOpenModal:boolean,
    setIsOpenModal: React.Dispatch<boolean>;
}
const Modal = ({setIsOpenModal,isOpenModal}:Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const handleOutsideClick = (event:MouseEvent) => {
        console.log('click')
        if(!ref.current?.contains(event.target as Node)) {
            setIsOpenModal(false)
        }
    }


    useEffect(() => {
        if(isOpenModal) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    },[isOpenModal])
    return (
        <div className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
            <div ref={ref} className='modal-container' >
                <span className='modal-title'>Rules</span>
                <img onClick={() => setIsOpenModal(false)} className='modal-close' src="./src/assets/images/icon-close.svg"/>
                <img className='modal-main' src="./src/assets/images/image-rules.svg"/>
            </div>
        </div>
    );
};

export default Modal;