//adicionar a função de 'riscar' a tarefa para concluir no localStorage

const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    atualiza()
}

// Criar um botão dentro da tarefa 
const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerHTML = `&#10004;`

    botaoConclui.addEventListener('click', ()=> concluirTarefa(atualiza, id))

    return botaoConclui
}

export default BotaoConclui
