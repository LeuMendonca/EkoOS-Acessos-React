import { ReactNode, createContext, useState } from "react"

interface CurrencyPagesContextProps{
    currencyPage: string
    setCurrencyPage: any
}

export const contextPages = createContext({} as CurrencyPagesContextProps)

interface ContextPagesProps {
    children: ReactNode
}

export default function ContextPages({ children }:ContextPagesProps ) {


    const [ currencyPage , setCurrencyPage ] = useState<string>('acessos')

    return (
        <contextPages.Provider value={{currencyPage,setCurrencyPage}}>
            {children}
        </contextPages.Provider>
    )
}
