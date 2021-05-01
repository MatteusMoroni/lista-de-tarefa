import { ordenarDatas, removeDataRepetidas } from "../service/data.js";
import { criarData } from "./criarData.js";

export const carregarTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))||[]

    lista.innerHTML = " "
    const dataUnicas = removeDataRepetidas(tarefasCadastradas)
    ordenarDatas(dataUnicas)
    dataUnicas.forEach((dia) => {
        
        lista.appendChild(criarData(dia))
    })
}