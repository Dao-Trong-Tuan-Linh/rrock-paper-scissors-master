import {createContext,useContext} from 'react'
import { StateProviderType } from '../interface/interface';

export const StateContext = createContext<StateProviderType | null>(null);

export const useElementState = () => {
    const context = useContext(StateContext);
    if(!context) {
        throw new Error('useState must be used within a StateProvider');
    }
    return context;
}