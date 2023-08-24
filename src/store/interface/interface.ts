export interface GameElement {
    value?:string,
    agent?:string,
    background?:string,
    isWin?:boolean,
    img?:string,
    area:string
}

export interface UserProviderType {
    userOption:GameElement,
    setUserOption:React.Dispatch<GameElement>
}

export interface HouseProviderType {
    houseOption:GameElement,
    setHouseOption:React.Dispatch<GameElement>
}

export interface ProviderProps {
    children:React.ReactNode | React.ReactElement
}