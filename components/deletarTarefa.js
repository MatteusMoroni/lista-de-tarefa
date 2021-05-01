const deletarTarefa = (atualiza, id) => {
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()

}
//criar botao deleta
const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'x'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id))
    return botaoDeleta
}

// exclui a tarefa ao clicar no botao deleta


export default BotaoDeleta