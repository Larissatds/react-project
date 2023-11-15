import MeuComponente from "./components/MeuComponente"
import MeuContador from "./components/MeuContador"
import MinhaBusca from "./components/MinhaBusca"
import MinhaLista from "./components/MinhaLista"
import styles from './button.module.css'

function App() {

  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente/>
      <MeuBotao conteudo='me clique'/>

      <MeuBotao conteudo='depois aqui'/>

      <MeuBotao conteudo='e por fim aqui'/>

      <MeuContador/>

      <h1>Listas no React</h1>
      <MinhaLista />

      <h1>Buscando Dados com Fetch</h1>
      <MinhaBusca />
    </div>
  )
}

function MeuBotao(props){
  return(
    <button className={styles.myButton}>{props.conteudo}</button>
  )
}

export default App
