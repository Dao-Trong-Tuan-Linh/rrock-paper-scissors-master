import {useState} from 'react'
import {HouseContext} from './HouseContext'
import { GameElement,ProviderProps } from '../interface/interface'

export const HouseProvider:React.FC<ProviderProps> = ({children}) => {
    const [houseOption,setHouseOption] = useState<GameElement>({
        agent:'the house',
        area:'house'
    })

    return (
        <HouseContext.Provider value = {{houseOption,setHouseOption}}>
            {children}
        </HouseContext.Provider>
    )
}