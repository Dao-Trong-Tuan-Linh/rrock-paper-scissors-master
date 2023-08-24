import {createContext,useContext} from 'react'
import {HouseProviderType} from '../interface/interface'

export const HouseContext = createContext<HouseProviderType | null>(null)

export const useElementHouse = () => {
    const context = useContext(HouseContext)
    if (!context) {
        throw new Error('useElementHome must be used within a HouseProvider');
      }
      return context;
}