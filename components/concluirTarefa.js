

// Criar um botão dentro da tarefa 
const BotaoConclui = () => {
    const botaoconclui = document.createElement('button')
    botaoconclui.classList.add('check-button')
    botaoconclui.innerHTML = `&#10004;`

    botaoconclui.addEventListener('click', concluirTarefa)

    return botaoconclui
}

//adicionar a função de 'riscar' a tarefa para concluir
const concluirTarefa = (evento) => {
    const botaoconclui = evento.target // estudar

    const tarefaCompleta = botaoconclui.parentElement //estudar

    tarefaCompleta.classList.toggle('done')


}

export default BotaoConclui
