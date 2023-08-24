import {useState} from 'react'
import { UserContext } from './UserContext'
import { GameElement,ProviderProps } from '../interface/interface'

export const UserProvider:React.FC<ProviderProps> = ({children}) => {
    const [userOption,setUserOption] = useState<GameElement>({area: "user",agent:'you'})

    return (
        <UserContext.Provider value = {{userOption,setUserOption}}>
            {children}
        </UserContext.Provider>
    )
}