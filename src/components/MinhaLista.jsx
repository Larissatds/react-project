import { useEffect, useState } from "react"

const lista = [
    {id: "1", value:"Fruta"},
    {id: "2", value:"Legume"},
    {id: "3", value:"Carne"},
]

export default function MinhaLista(){

    const [produtos, setProdutos] = useState(lista)
    const [pesquisa, setPesquisa] = useState("")

    useEffect(
        () => {
            if(pesquisa){
                const novaLista = lista.filter(( item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProdutos(novaLista)
            }    
            else{
                setProdutos(lista)
            }       
        }
    , [pesquisa])

    return (
        <div>
            <h1>Efeitos Colaterais</h1>
            <input
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Pesquise Aqui!"></input>
            {
                produtos.map((item) => {
                    return(
                        <div key={item.id}>
                            <h4>{item.value}</h4>
                        </div>
                    )
                })
            }
        </div>
    )}