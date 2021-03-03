import { useContext } from "react";
import { ValorContext } from '../Contexts/ContextValor';

export function ValorAtual() {

    const { valor } = useContext(ValorContext);

    return(
        <div>
            <strong>O valor atual é : {valor}</strong>
        </div>
    );
}