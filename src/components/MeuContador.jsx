import { useState } from "react"   
import styles from '../button.module.css'

export default function MeuContador(){

    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)
    }

    function diminuir(){
        setContador(contador - 1)
    }

    if(contador > 5){
        return(
            <div>
                <h1>Valor muito alto!</h1>
                <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
            </div>
        )
    }

    return(
        <div className="container">
            <h1>Meu Contador: {contador}</h1>
            { contador < 2 ? <h1>Valor muito  baixo!</h1> : null}
            <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
            <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
        </div>
    )
}