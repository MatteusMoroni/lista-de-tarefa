import BotaoConclui from './components/concluirTarefa.js'
import BotaoDeleta from './components/deletarTarefa.js'

    const novaTarefa = document.querySelector('[data-form-button]') 

//criar uma tarefa 

const criarTarefa = (evento) => {
    
    evento.preventDefault()

    const input = document.querySelector('[data-form-imput]')
    const lista = document.querySelector('[data-list]')
    const valor  = input.value

    if(input.value == "") {

        alert("Informe uma tarefa :)")
    }
    
    else{

        const tarefa = document.createElement('li')
        tarefa.classList.add('task') // estudar
        const buttons = document.createElement('div')
        
        const conteudo = `<p class="content">${valor}</p>
        `
    
        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa) // estudar
    
        input.value = ""
    }
}


novaTarefa.addEventListener('click', criarTarefa) //estudar 

