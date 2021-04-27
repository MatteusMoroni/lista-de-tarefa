//criar botao deleta
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerHTML = `X`
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

// exclui a tarefa ao clicar no botao deleta

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

}

export default BotaoDeleta