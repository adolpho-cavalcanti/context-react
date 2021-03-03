import { createContext, ReactNode, useState } from 'react';

interface ValorContextProviderData {
    valor: number; 
    increment: () => void;
    decrement: () => void; 
}

interface ValorContextProviderProps {
    children: ReactNode;
}

export const ValorContext = createContext({} as ValorContextProviderData);

export function ContextValorProvider({children}: ValorContextProviderProps) {

    const [valor, setValor] = useState(0);

    function increment() {
        setValor(valor + 1);
      }
      function decrement() {
        setValor(valor - 1);
      
      }

    return(
        <ValorContext.Provider value={{
            valor,
            increment,
            decrement,
        }}>
            {children}
        </ValorContext.Provider>
    );
}