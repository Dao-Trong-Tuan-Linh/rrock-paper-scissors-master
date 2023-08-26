import {useState} from 'react'
import { StateContext } from './StateContext'
import { ProviderProps } from '../interface/interface'

export const StateProvider:React.FC<ProviderProps> = ({children}) => {
    const [isBonus,setIsBonus] = useState(false);

    return(
        <StateContext.Provider value={{isBonus,setIsBonus}}>
            {children}
        </StateContext.Provider>
    )
}