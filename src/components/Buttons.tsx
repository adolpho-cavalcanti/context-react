import { useContext } from "react";
import { ValorContext } from "../Contexts/ContextValor";

export function Buttons() {

  const { increment, decrement } = useContext(ValorContext);

    return(
        <div>
            <button type="button" onClick={increment}>+</button>
            <button type="button" onClick={decrement}>-</button>
        </div>
    );
}