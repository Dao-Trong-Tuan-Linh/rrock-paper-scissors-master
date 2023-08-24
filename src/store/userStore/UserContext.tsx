import {createContext,useContext} from 'react'
import {UserProviderType} from '../interface/interface'

export const UserContext = createContext<UserProviderType | null>(null)

export const useElementUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
      }
      return context;
}